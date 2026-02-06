# Bedrag Ineens Backend

This backend implements the Regelspraak rules for the "Bedrag Ineens" pension calculator and serves profile data from the hackathon profiles.

## Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Start the server:
```bash
npm start
# or for development with auto-reload:
npm run dev
```

The server runs on `http://localhost:3001` by default.

## API Endpoints

### GET /api/profiles
Returns a list of available profiles (limited to 10).

```json
[
  {
    "id": "100000001",
    "name": "Merijn van der Meer",
    "description": "ZZP'er in de thuiszorg..."
  }
]
```

### GET /api/profiles/:id
Returns detailed profile data for a specific profile.

### POST /api/calculate
Calculates the "bedrag ineens" scenario for a profile.

**Request body:**
```json
{
  "profileId": "100000001",
  "opnamePercentage": 10
}
```

**Response:**
```json
{
  "profile": { ... },
  "percentage": 10,
  "result": {
    "bedragIneens": 6000,
    "inkomen": 39400,
    "belastingNaHeffingskortingen": 4000,
    ...
  },
  "baseline": { ... },
  "comparison": {
    "inkomenVerschil": ...,
    "belastingVerschil": ...,
    "maandelijksVerlies": ...,
    "nettoUitkering": ...
  }
}
```

### GET /api/parameters
Returns all rule parameters (tax brackets, benefits thresholds, etc.)

### GET /api/health
Health check endpoint.

## Rules Implementation

The backend implements all rules from `rules/bedrag-ineens/regels.rs`:

1. **Phase 1: Bedrag Ineens Basisberekeningen**
   - Pensioen per jaar
   - Bedrag ineens (lump sum)
   - Resterend pensioen per jaar
   - Permanent verlies per jaar

2. **Phase 2: Bruto Inkomen**
   - Total income calculation

3. **Phase 3: Belasting**
   - Zvw bijdrage (healthcare contribution)
   - Tax bracket calculations (3 brackets)
   - Box 1 tax

4. **Phase 4: Heffingskortingen**
   - Algemene heffingskorting
   - Ouderenkorting
   - Alleenstaande ouderenkorting
   - Total tax credits
   - Tax after credits

5. **Phase 5: Toeslagen**
   - Zorgtoeslag (healthcare benefit)
   - Huurtoeslag (housing benefit)

6. **Phase 6: Beschikbaar Inkomen**
   - Net available income after taxes and contributions

## Configuration

The backend uses 2024 tax parameters from the EK Nota. These are defined in `rules.js` and can be updated for different years.
