# Hackathon RAC - Claude Code Instructions

## Regelspraak Syntax Learnings

### Attribute Naming
- Engine strips dimension keywords: `bruto`, `netto`, `huidig jaar`, `vorig jaar`, `volgend jaar`
- These are reserved for the dimensional data system (reading pre-populated nested structures)
- Use distinct names to avoid collisions: `beschikbaar inkomen` not `netto inkomen`
- Use simple names: `het bedrag ineens` not `het bruto bedrag ineens`
- Check actual stored names in output to debug mismatches

### Dimensional Attributes (Advanced)
- Dimensional system is for **reading** pre-populated nested data, not computing/writing
- Define with: `Dimensie de brutonettodimensie... gedimensioneerd met brutonettodimensie`
- Input data structure: `inkomen: { bruto: 50000, netto: 35000 }`
- For computing values: use distinct attribute names instead

### Kenmerk (Boolean Characteristics)
- Definition: `is alleenstaand kenmerk (bijvoeglijk);`
- Check syntax: `indien zijn persoon is alleenstaand` (subject + is + kenmerk)
- NOT: `indien zijn persoon alleenstaand is` (wrong word order)
- Negation `niet is` not supported - avoid negated kenmerk rules

### Comparisons
- Correct: `is kleiner of gelijk aan`, `is groter dan`
- Wrong: `kleiner of gelijk is aan` (is must come first)

### Dutch Number Words
- Use ordinals: `eerste`, `tweede`, `derde`
- NOT cardinals: `een`, `twee`, `drie` (these are grammar keywords)

### Min/Max Functions
- `de minimale waarde van X en Y`
- `de maximale waarde van X en Y`

### Parameters
- Default values (`= 100 €`) not supported in grammar
- Provide all parameter values via JSON input

### Relationship Navigation
- Use possessive: `zijn persoon` to navigate from Scenario to Persoon
- Self-reference: `het scenario` to access computed values on current object
- Pattern: `het AOW inkomen van zijn persoon` (attribute of related object)

### Testing Incrementally
- Add rules phase by phase
- Check output attribute names match what you reference
- Use run.js pattern from TOKA for custom runners

## Project Structure

```
regelspraak-ts/          # TypeScript Regelspraak engine
  examples/toka/         # Reference implementation (use as syntax guide)
rules/bedrag-ineens/     # Bedrag ineens rules
  gegevens.rs            # Data definitions (Objecttypes, Parameters, Feittypes)
  regels.rs              # Calculation rules
  regels_test.rs         # Test subset of rules
  run.js                 # Custom runner (follows TOKA pattern)
  test_table1.json       # Test data (EK Nota Table 1)
```

## Key Commands

```bash
# Run bedrag ineens test
cd rules/bedrag-ineens && node run.js test_table1.json regels_test.rs

# Check TOKA examples for syntax reference
cat regelspraak-ts/examples/toka/regels.rs | grep -A5 "pattern"
```
