# Hashira Assessment Task - Polynomial Coefficient Computation Tool

## Project Summary

This implementation solves the Hashira Assessment challenge by computing polynomial coefficients from root values specified in multiple numerical bases. The solution processes JSON-formatted input containing roots in various base systems and determines the corresponding polynomial's coefficients.

## Challenge Description

- **Time Limit:** 45 minutes
- **Programming Language:** Any language excluding Python
- **Objective:** Derive polynomial coefficients from root values presented in JSON structure

### Input Structure

The input consists of a JSON object featuring:
- `keys.n`: Complete count of available roots
- `keys.k`: Required minimum root count (where k = m + 1, and m represents polynomial degree)
- Indexed entries (1, 2, 3, etc.) containing `base` and `value` properties

### Example Input

```json
{
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
}
```

## Implementation Strategy

### Method

1. **Input Processing**: Extract root values from JSON, transforming values from their original bases to decimal notation
2. **Root Selection**: Utilize only the initial `k-1` roots (matching polynomial degree)
3. **Coefficient Generation**: Apply Vieta's principles to derive polynomial coefficients from selected roots

### Mathematical Foundation

For a polynomial containing roots r₁, r₂, ..., rₙ, the polynomial representation is:
```
P(x) = (x - r₁)(x - r₂)...(x - rₙ)
```

Coefficients are determined through iterative calculations based on the correlation between roots and their corresponding coefficients.

## Program Architecture

### Core Functions

- `parseValue()`: Transforms values from arbitrary bases to decimal format
- `extractRoots()`: Processes all root values from JSON input
- `computeCoefficients()`: Determines polynomial coefficients through iterative expansion
- `main()`: Coordinates the complete workflow

### Implementation Specifics

```javascript
// Sample application using the given test scenario
const exampleInput = {
    keys: { n: 6, k: 5 },
    "1": { base: "16", value: "1a" },      // Decimal equivalent: 26
    "2": { base: "10", value: "42" },      // Decimal equivalent: 42
    "3": { base: "8", value: "77" },       // Decimal equivalent: 63
    "4": { base: "2", value: "11001" },    // Decimal equivalent: 25
    "5": { base: "10", value: "99" },      // Decimal equivalent: 99
    "6": { base: "16", value: "ff" }       // Decimal equivalent: 255
};
```

## Implementation Guide

### System Requirements
- Node.js runtime environment
- Code editor or IDE of choice

### Execution Steps

1. Download the repository:
```bash
git clone [repository-url]
cd hashira-assessment-solution
```

2. Execute the program:
```bash
node solution.js
```

### Output Format

The application produces polynomial coefficients in array representation:
```
[highest_degree_coefficient, next_degree_coefficient, ..., linear_coefficient, constant_value]
```

## Testing Scenarios

### Scenario 1 (Basic)
- **Data**: 4 available roots, utilizing first 3
- **Root Values**: [4, 7, 12] (post base transformation)
- **Outcome**: Coefficients for polynomial containing these roots

### Scenario 2 (Advanced)
- **Data**: 10 available roots across different bases, utilizing first 6
- **Base Systems**: 6, 15, 15, 16, 8, 3, 3, 6, 12, 7
- **Complexity**: Large numerical values and diverse base conversions

## Implementation Details

### Base Transformation
The implementation manages conversion from any supported base (2-36) to decimal using JavaScript's native `parseInt()` method.

### Coefficient Determination
Employs an incremental methodology to construct coefficients by expanding:
- Initialize with coefficient array [1]
- For each root r, multiply existing polynomial by (x - r)
- Modify coefficients systematically

### Performance Analysis
- **Base Transformation**: O(n × log(maximum_value))
- **Coefficient Determination**: O(k²) where k represents polynomial degree
- **Total Complexity**: O(n × log(maximum_value) + k²)

### Memory Usage
- O(k) for coefficient and root storage

## Solution Validation

Manual verification process:
1. Transform all values to decimal using their specified bases
2. Choose the initial `k-1` roots
3. Build the polynomial: P(x) = (x - r₁)(x - r₂)...(x - rₖ₋₁)
4. Expand to obtain coefficients
5. Cross-reference with program results

## Exception Management

The implementation incorporates fundamental error handling for:
- Absent root entries in JSON structure
- Invalid base transformation operations
- Edge case scenarios

## Usage Rights

This project serves educational and evaluation objectives.
