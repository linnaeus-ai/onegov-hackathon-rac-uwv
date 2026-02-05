# Bedrag Ineens Test Profiles

This directory contains test profiles converted from `Hackathon_profiles.yaml`.

## Profile Format

Each JSON file contains:

```json
{
  "name": "Profile 001: Name",
  "description": "Profile description",
  "source_bsn": "100000001",
  "source_data": {
    "age": 67,
    "has_partner": false,
    "aow_percentage": 100,
    "pfzw_pensioenvermogen": 60000,
    "abp_pensioenvermogen": 0
  },
  "parameters": { /* 23 shared tax parameters */ },
  "objects": {
    "personen": [{ /* Persoon data */ }],
    "scenarios": [
      { "id": "scenario_0pct", "opname percentage": 0 },
      { "id": "scenario_5pct", "opname percentage": 5 },
      { "id": "scenario_10pct", "opname percentage": 10 }
    ]
  },
  "relationships": [ /* scenario van persoon */ ],
  "kenmerken": {
    "Persoon": {
      "persoon_xxx": {
        "is AOW gerechtigd": true,
        "is alleenstaand": true
      }
    }
  }
}
```

## Generating Profiles

```bash
cd scripts
node convert-profiles.js
```

## Running Tests

```bash
# Run all profiles
node scripts/run-all.js

# Generate human-readable report
node scripts/generate-report.js
```

## Data Mapping

| Source (YAML) | Target (JSON) |
|---------------|---------------|
| PFZW/ABP Pensioenvermogen OP | pensioenvermogen (÷100) |
| PFZW/ABP OP_verwacht_maand | aanvullend pensioen per maand (÷100) |
| RvIG personen[0].age >= 67 | is AOW gerechtigd |
| !RvIG personen[0].has_partner | is alleenstaand |
| SVB aow_percentage × 19600 | AOW inkomen |

Note: YAML values are in cents (×100), converted to euros in JSON.
