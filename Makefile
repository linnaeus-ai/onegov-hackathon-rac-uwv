# Hackathon RAC - Makefile
# Bedrag Ineens Rules-as-Code

.PHONY: install install-engine install-frontend build test test-single \
        test-report convert-profiles clean help

# Default target
help:
	@echo "Usage: make <target>"
	@echo ""
	@echo "Setup:"
	@echo "  install          Full setup (submodules + engine + dependencies)"
	@echo "  install-engine   Install and build regelspraak-ts engine only"
	@echo "  install-frontend Install frontend dependencies"
	@echo ""
	@echo "Testing:"
	@echo "  test             Run all bedrag-ineens profile tests"
	@echo "  test-single      Run single test (e.g., make test-single FILE=test_table1.json)"
	@echo "  test-report      Generate human-readable test report"
	@echo ""
	@echo "Development:"
	@echo "  convert-profiles Regenerate JSON profiles from YAML (requires js-yaml)"
	@echo "  clean            Remove build artifacts"

# Full installation
install: install-engine
	@echo "Installation complete."
	@echo "Run 'make test' to verify the setup."

# Initialize submodules and build the regelspraak engine
install-engine:
	@echo "Initializing git submodules..."
	git submodule update --init --recursive
	@echo "Installing regelspraak-ts dependencies..."
	cd regelspraak-ts && npm install
	@echo "Building regelspraak-ts..."
	cd regelspraak-ts && npm run build
	@echo "Engine ready."

# Install frontend (optional, for UI development)
install-frontend:
	@echo "Installing frontend dependencies..."
	cd frontend && npm install

# Run all bedrag-ineens tests
test:
	@cd rules/bedrag-ineens/scripts && node run-all.js

# Run a single test file
FILE ?= test_table1.json
test-single:
	@cd rules/bedrag-ineens && node run.js $(FILE)

# Generate test report
test-report:
	@cd rules/bedrag-ineens/scripts && node generate-report.js

# Regenerate profiles from YAML (profiles are already committed, rarely needed)
convert-profiles:
	@if ! node -e "require('js-yaml')" 2>/dev/null; then \
		echo "Error: js-yaml not found. Install with: npm install -g js-yaml"; \
		exit 1; \
	fi
	cd rules/bedrag-ineens/scripts && node convert-profiles.js

# Clean build artifacts
clean:
	rm -rf regelspraak-ts/dist
	rm -rf frontend/dist
	rm -f rules/bedrag-ineens/results/summary.json
