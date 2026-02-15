/**
 * ScienceTools Engine - Sabrina Biology Elite 5.5
 * Precision calculators for AP Biology & TJHSST Experimental Analysis.
 */

window.ScienceTools = (function () {

    /**
     * Chi-Square Test Calculator
     * Formula: sum((observed - expected)^2 / expected)
     */
    function calculateChiSquare(observedArr, expectedArr) {
        if (observedArr.length !== expectedArr.length) return null;

        let chiSquare = 0;
        for (let i = 0; i < observedArr.length; i++) {
            const o = observedArr[i];
            const e = expectedArr[i];
            if (e === 0) continue;
            chiSquare += Math.pow(o - e, 2) / e;
        }

        return {
            value: chiSquare.toFixed(3),
            df: observedArr.length - 1,
            criticalValue5: getCriticalValue(observedArr.length - 1, 0.05)
        };
    }

    function getCriticalValue(df, p) {
        // Basic AP Bio critical values (p=0.05)
        const table = { 1: 3.84, 2: 5.99, 3: 7.82, 4: 9.49, 5: 11.07 };
        return table[df] || "Ref Table";
    }

    /**
     * Standard Error & Confidence Intervals
     */
    function calculateStats(dataArr) {
        const n = dataArr.length;
        if (n === 0) return null;

        const sum = dataArr.reduce((a, b) => a + b, 0);
        const mean = sum / n;

        const variance = dataArr.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (n - 1);
        const sd = Math.sqrt(variance);
        const se = sd / Math.sqrt(n);

        return {
            mean: mean.toFixed(2),
            sd: sd.toFixed(2),
            se: se.toFixed(2),
            ci95: (se * 1.96).toFixed(2) // 95% Confidence Interval Approx
        };
    }

    /**
     * Water Potential Logic
     * Formula: Psi = Psi_s + Psi_p
     * Psi_s = -iCRT
     */
    function calculateSolutePotential(i, C, R, T_celsius) {
        const T_kelvin = T_celsius + 273;
        const psi_s = -1 * i * C * R * T_kelvin;
        return psi_s.toFixed(2);
    }

    return {
        chiSquare: calculateChiSquare,
        stats: calculateStats,
        solutePotential: calculateSolutePotential
    };

})();
