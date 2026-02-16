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
        explanation: "This Java logic illustrates the two phases of photosynthesis. Light-dependent reactions are modeled with an 'if' condition (requires light/water), while the Calvin Cycle is a 'while' loop that iterates as long as ATP and CO2 are available."
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
        explanation: "Natural selection is modeled as an iteration over a population. Individuals whose fitness exceeds a survival threshold are permitted to 'reproduce', passing their algorithmic traits to the next collection (generation)."
    },

    "dna_replication": {
        title: "DNA Replication: Fork Logic",
        logic: `
public class ReplicationEngine {
    public void replicate(DNA doubleHelix) {
        Helicase helicase = new Helicase();
        Fork fork = helicase.unzip(doubleHelix);
        
        // Semi-conservative replication
        while (fork.hasNextNucleotide()) {
            fork.leadingStrand.append(DNA_Polymerase.match(fork.current()));
            
            if (fork.isLagging()) {
                OkazakiFragment frag = Ligase.seal(fork.processLagging());
                System.out.println("Fragment sealed: " + frag.id);
            }
        }
    }
}
        `,
        explanation: "DNA replication logic follows a semi-conservative model. The 'Helicase' class unzips the helix, creating a fork, while 'Polymerase' methods systematically match nucleotides for both leading and lagging strands."
    },

    "transcription": {
        title: "Transcription: Genetic Read-Out",
        logic: `
public class GeneExpression {
    public mRNA transcribe(Gene gene) {
        RNA_Polymerase pol = new RNA_Polymerase();
        pol.bind(gene.getPromoter()); // TATA Box bind
        
        mRNA transcript = new mRNA();
        while (!pol.atTerminator()) {
            Base pair = pol.read(gene.next());
            transcript.add(pair.getComplementaryRNA());
        }
        
        return Splicer.process(transcript); // Post-transcriptional modification
    }
}
        `,
        explanation: "Transcription is modeled as a stream-processing operation. RNA Polymerase binds to a promoter, reads the DNA template, and generates an mRNA transcript, which then undergoes post-processing via the 'Splicer' utility."
    },

    "operon_regulation": {
        title: "Operon Control: Conditional Logic",
        logic: `
public class OperonController {
    public void regulate(Environment env, Operon lac) {
        // High Lactose AND Low Glucose required for expression
        if (env.hasLactose() && !env.hasGlucose()) {
            lac.setRepressor(false);
            lac.setCAPBinding(true);
            lac.express();
            System.out.println("Lactose breakdown enzymes synthesized.");
        } else {
            lac.setRepressor(true); // Repressor blocks RNA Pol
            System.out.println("Gene expression inhibited by feedback logic.");
        }
    }
}
        `,
        explanation: "Gene regulation in bacteria (Operons) acts as a complex conditional gate. The 'lac' operon only activates when specific environmental booleans are met, ensuring metabolic efficiency."
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
        explanation: "The solution to a quadratic equation is visualized as a multi-conditional branching structure based on the value of the discriminant."
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
        explanation: "Factorials serve as a perfect mathematical example for explaining the core CS concepts of iteration (using loops) and recursion (functions calling themselves)."
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
        explanation: "A primality test implements number theory in code. Limiting the loop to the square root of 'n' is a standard optimization strategy based on mathematical properties."
    },

    "logarithms": {
        title: "Logarithmic Rules: Static Implementation",
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
        explanation: "Logarithmic properties are abstracted here into static Java methods. The mathematical logic where multiplication becomes addition is directly reflected in the code's operators."
    },

    "differentiation": {
        title: "Differentiation: Power Rule Logic",
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
        explanation: "Differentiation rules are analogous to multi-step algorithmic procedures. The Power Rule is a simple coefficient transformation, while the Chain Rule can be implemented as a functional composition."
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
        explanation: "Water potential concepts model physical system equilibrium. The logic that water moves from areas of high potential to low potential is perfectly captured by a simple conditional statement."
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
        explanation: "Mendelian laws are implemented via nested loops for allele combination generation. Determining phenotypic expression utilizes boolean logic based on the presence of dominant characters."
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
        explanation: "Enzyme kinetics are modeled through conditional parameter shifts. Competitive inhibition is represented by increasing the effective Km, while non-competitive inhibition decreases the Vmax variable."
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
        explanation: "Cellular transport is an if-else decision process based on energy availability and concentration gradients. Passive diffusion executes freely, whereas active transport requires a verified energy expenditure."
    }
};


