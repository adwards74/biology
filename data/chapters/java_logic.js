window.JAVA_LOGIC_DATA = {
    // Biology Concepts
    "photosynthesis": {
        title: "Photosynthesis: Logic Flow",
        logic: `
public class Photosynthesis {
    public static void main(String[] args) {
        LightEnergy sunlight = new LightEnergy(680); // nm
        Water h2o = new Water();
        CO2 co2 = new CO2();

        if (sunlight.isPresent() && h2o.isPresent()) {
            // Light-Dependent Reaction
            ATP energy = sunlight.convert(h2o);
            System.out.println("Oxygen released as byproduct.");

            while (co2.isPresent() && energy.amount > 0) {
                // Calvin Cycle (Light-Independent)
                Glucose result = energy.fixCarbon(co2);
                System.out.println("Glucose synthesized: " + result.mass + "g");
            }
        } else {
            System.out.println("Stomata closed. System in standby.");
        }
    }
}
        `,
        explanation: "이 Java 로직은 광합성의 두 단계를 보여줍니다. 명반응(Light-Dependent)은 if 조건문으로, 캘빈 회로(Calvin Cycle)는 에너지와 CO2가 있을 때 반복되는 while 루프로 표현되었습니다."
    },

    "natural_selection": {
        title: "Natural Selection: Algorithm",
        logic: `
public class EvolutionEngine {
    public void runSelection(List<Organism> population) {
        for (Organism individual : population) {
            double fitness = individual.calculateFitness(Environment.CURRENT);

            if (fitness > Environment.SURVIVAL_THRESHOLD) {
                individual.reproduce(); // Next generation inherits traits
                System.out.println("Trait " + individual.trait + " persisted.");
            } else {
                population.remove(individual);
                System.out.println("Individual removed from gene pool.");
            }
        }
    }
}
        `,
        explanation: "자연선택은 집단(List)을 순회하는 for 루프로 표현됩니다. 적합도(Fitness)가 임계값을 넘는 객체만이 reproduction() 메서드를 호출하여 다음 세대로 유전자를 전달합니다."
    },

    // Mathematics Concepts
    "quadratic_formula": {
        title: "Quadratic Formula: Implementation",
        logic: `
public class MathSolver {
    public void solveQuadratic(double a, double b, double c) {
        double discriminant = Math.pow(b, 2) - 4 * a * c;

        if (discriminant > 0) {
            double root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            double root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            System.out.println("Two real roots found.");
        } else if (discriminant == 0) {
            double root = -b / (2 * a);
            System.out.println("One repeated root found.");
        } else {
            ComplexNumber root1 = new ComplexNumber(-b/(2*a), Math.sqrt(-discriminant)/(2*a));
            System.out.println("Imaginary roots calculated.");
        }
    }
}
        `,
        explanation: "이차방정식의 해법은 판별식(Discriminant)의 값에 따른 다중 조건문(if-else if-else) 구조로 명확하게 시각화됩니다."
    },

    "factorial": {
        title: "Factorial: Recursive vs Iterative",
        logic: `
public class MathPatterns {
    // Iterative approach using a For-Loop
    public long calculateFactorial(int n) {
        long result = 1;
        for (int i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    // Recursive approach (Elite Logic)
    public long factorialRecursive(int n) {
        if (n <= 1) return 1;
        return n * factorialRecursive(n - 1);
    }
}
        `,
        explanation: "계승(Factorial)은 반복문(For-loop)과 재귀(Recursion)라는 CS의 핵심 개념을 설명하기에 가장 완벽한 수학적 예시입니다."
    },

    "prime_numbers": {
        title: "Prime Check: Algorithmic Efficiency",
        logic: `
public class NumberTheory {
    public boolean isPrime(int n) {
        if (n <= 1) return false;
        
        // Efficiency: Only check up to the square root
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false; // Found a divisor
            }
        }
        return true; // No divisors found
    }
}
        `,
        explanation: "소수 판별 알고리즘은 '정수론'의 개념을 코드로 구현한 것입니다. 특히 루프의 범위를 제곱근($\\sqrt{n}$)까지로 제한하는 것은 수학적 성질을 이용한 알고리즘 최적화의 정석입니다."
    },

    "logarithms": {
        title: "Logarithmic Rules: Method Overloading",
        logic: `
public class LogRules {
    public static double logProduct(double x, double y) {
        // log(xy) = log(x) + log(y)
        return Math.log(x) + Math.log(y);
    }

    public static double logQuotient(double x, double y) {
        // log(x/y) = log(x) - log(y)
        return Math.log(x) - Math.log(y);
    }

    public static double logPower(double x, double p) {
        // log(x^p) = p * log(x)
        return p * Math.log(x);
    }
}
        `,
        explanation: "로그의 성질은 Java의 정적 메서드로 깔끔하게 추상화됩니다. 곱셈이 덧셈으로, 나눗셈이 뺄셈으로 변환되는 수학적 논리가 코드의 연산자로 직관적으로 표현됩니다."
    },

    "differentiation": {
        title: "Differentiation: The Power Rule Logic",
        logic: `
public class CalculusEngine {
    public Derivative solvePowerRule(double coefficient, int power) {
        // d/dx [ax^n] = (a*n)x^(n-1)
        double newCoeff = coefficient * power;
        int newPower = power - 1;
        
        return new Derivative(newCoeff, newPower);
    }
    
    public double solveChainRule(Function outer, Function inner, double x) {
        // d/dx [f(g(x))] = f'(g(x)) * g'(x)
        return outer.derivative(inner.value(x)) * inner.derivative(x);
    }
}
        `,
        explanation: "미분 공식은 알고리즘의 단계적 절차와 같습니다. 파워 룰(Power Rule)은 계수와 지수를 조정하는 단순 연산이며, 체인 룰(Chain Rule)은 재귀적인 함수의 결합으로 코딩할 수 있습니다."
    },

    "water_potential": {
        title: "Water Potential: Environmental Physics",
        logic: `
public class PlantPhysiology {
    public double calculatePsi(double solutePot, double pressurePot) {
        // Total Potential = Solute + Pressure
        return solutePot + pressurePot;
    }

    public double calculateSolutePotential(double i, double c, double r, double t) {
        // Psi_s = -iCRT
        return -1 * i * c * r * (t + 273.15); // Pressure in bars
    }

    public void determineWaterFlow(Cell a, Cell b) {
        if (a.psi > b.psi) {
            System.out.println("Water flows from A to B.");
        } else {
            System.out.println("Water flows from B to A.");
        }
    }
}
        `,
        explanation: "생물학의 수분 퍼텐셜 개념은 물리학적 시스템의 평형을 계산하는 것과 같습니다. 수치가 높은 곳에서 낮은 곳으로 흐르는 논리는 if-else 조건문으로 완벽하게 설명됩니다."
    },

    "mendelian_genetics": {
        title: "Genetics: Punnett Square Simulation",
        logic: `
public class GeneticsEngine {
    public List<Genotype> cross(String parent1, String parent2) {
        List<Genotype> offspring = new ArrayList<>();
        
        for (char allele1 : parent1.toCharArray()) {
            for (char allele2 : parent2.toCharArray()) {
                offspring.add(new Genotype(allele1, allele2));
            }
        }
        return offspring; // Returns 4 combinations
    }
    
    public String determinePhenotype(Genotype g) {
        // If any dominant allele exists, show dominant trait
        if (g.isDominant()) return "Dominant Trait Observed";
        return "Recessive Trait Observed";
    }
}
        `,
        explanation: "멘델의 유전 법칙은 이중 for 루프를 통한 조합 생성 알고리즘입니다. 우성 유전자의 유무를 판별하는 논리는 boolean 체크와 조건문으로 간단히 구현됩니다."
    },

    "enzyme_kinetics": {
        title: "Enzyme Kinetics: Inhibition States",
        logic: `
public class BioChemistry {
    public double calculateRate(double vMax, double s, double km, Inhibitor i) {
        if (i == null) {
            return (vMax * s) / (km + s); // Michaelis-Menten
        }
        
        if (i.type == InhibitorType.COMPETITIVE) {
            // Competitive: Increases Km
            return (vMax * s) / (km * (1 + i.concentration/i.ki) + s);
        } else {
            // Non-Competitive: Decreases Vmax
            return (vMax / (1 + i.concentration/i.ki) * s) / (km + s);
        }
    }
}
        `,
        explanation: "효소 반응 속도론은 다중 조건문으로 표현됩니다. 경쟁적 저해(Competitive)는 Km 값을, 비경쟁적 저해는 Vmax 값을 변사시키는 매개변수 조작으로 모델링됩니다."
    },

    "cell_transport": {
        title: "Cell Transport: Active vs Passive",
        logic: `
public class MembraneManager {
    public void transport(Molecule m, Gradient g, Energy atp) {
        if (g.isDownhill()) {
            // Passive Transport (Diffusion)
            m.move(Direction.WITH_GRADIENT);
            System.out.println("No ATP consumed.");
        } else if (atp.amount >= m.energyCost) {
            // Active Transport (Pump)
            atp.consume(m.energyCost);
            m.move(Direction.AGAINST_GRADIENT);
            System.out.println("Pumping against gradient...");
        } else {
            System.out.println("Insufficient energy for transport.");
        }
    }
}
        `,
        explanation: "세포막 수송은 에너지(ATP) 가용성과 농도 구배(Gradient)를 체크하는 if-else 로직입니다. 확산은 조건 없이 실행되지만, 능동 수송은 반드시 ATP 소모가 동반됩니다."
    }
};

