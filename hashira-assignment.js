const testCase = {
    keys: { n: 6, k: 5 },
    "1": { base: "16", value: "1a" },      
    "2": { base: "10", value: "42" },      
    "3": { base: "8", value: "77" },       
    "4": { base: "2", value: "11001" },    
    "5": { base: "10", value: "99" },
    "6": { base: "16", value: "ff" }
};
const totalEntries = testCase.keys.n;
const polynomialDegree = testCase.keys.k - 1;

const parseValue = async ({ value, base }) => {
    return parseInt(value, base);
};

const extractRoots = async () => {
    const parsedRoots = [];

    for (let index = 1; index <= totalEntries; index++) {
        if (testCase[index]) {
            const root = await parseValue(testCase[index]);
            parsedRoots.push(root);
        }
    }

    return parsedRoots.slice(0, polynomialDegree);
};

const computeCoefficients = (roots) => {
    const coefficients = [1];

    for (const root of roots) {
        coefficients.push(0);
        for (let i = coefficients.length - 1; i >= 1; i--) {
            coefficients[i] -= root * coefficients[i - 1];
        }
    }

    return coefficients;
};

const main = async () => {
    const roots = await extractRoots();
    const coefficients = computeCoefficients(roots);
    console.log(coefficients);
};

main();