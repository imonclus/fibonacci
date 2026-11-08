import sys
import math

def generate_fibonacci(n):
    """Generates the Fibonacci sequence up to n terms."""
    if n <= 0:
        return []
    elif n == 1:
        return [0]

    sequence = [0, 1]
    for _ in range(2, n):
        next_term = sequence[-1] + sequence[-2]
        sequence.append(next_term)
    return sequence

def is_perfect_square(x):
    """Utility to check if a number is a perfect square."""
    if x < 0:
        return False
    s = math.isqrt(x)
    return s * s == x

def is_fibonacci_number(n):
    """Checks if a number is in the Fibonacci sequence."""
    if n < 0:
        return False
    # A number is Fibonacci if and only if one or both of (5*n^2 + 4) or (5*n^2 - 4) is a perfect square
    return is_perfect_square(5 * n * n + 4) or is_perfect_square(5 * n * n - 4)

def golden_ratio_approximation(n):
    """Calculates the approximation of the Golden Ratio using n terms of Fibonacci."""
    if n < 2:
        return None
    seq = generate_fibonacci(n)
    # The last two terms of the sequence
    a = seq[-2]
    b = seq[-1]
    if a == 0:
        return None
    return b / a

def main():
    while True:
        print("\n" + "="*40)
        print("    FIBONACCI & GOLDEN RATIO APP")
        print("="*40)
        print("1. Generar secuencia de Fibonacci")
        print("2. Comprobar si un número es Fibonacci")
        print("3. Calcular aproximación del Número Áureo")
        print("4. Salir")
        print("="*40)

        choice = input("Elige una opción (1-4): ")

        if choice == '1':
            try:
                n = int(input("¿Cuántos términos deseas generar?: "))
                if n <= 0:
                    print("Por favor ingresa un número entero positivo.")
                else:
                    seq = generate_fibonacci(n)
                    print(f"\nSecuencia de Fibonacci ({n} términos):")
                    print(", ".join(map(str, seq)))
            except ValueError:
                print("Entrada inválida. Por favor ingresa un número.")

        elif choice == '2':
            try:
                num = int(input("Ingresa un número para comprobar: "))
                if is_fibonacci_number(num):
                    print(f"\n¡Sí! {num} ES un número de Fibonacci.")
                else:
                    print(f"\nNo, {num} NO es un número de Fibonacci.")
            except ValueError:
                print("Entrada inválida. Por favor ingresa un número entero.")

        elif choice == '3':
            try:
                n = int(input("¿Cuántos términos deseas usar para la aproximación? (Recomendado: >10): "))
                if n < 2:
                    print("Se necesitan al menos 2 términos para calcular una aproximación.")
                else:
                    approx = golden_ratio_approximation(n)
                    if approx is not None:
                        seq = generate_fibonacci(n)
                        print(f"\nSecuencia generada hasta {seq[-1]}")
                        print(f"Dividiendo {seq[-1]} / {seq[-2]}")
                        print(f"Aproximación al Número Áureo: {approx:.10f}")
                        print(f"Valor real de Phi:          1.6180339887...")
            except ValueError:
                print("Entrada inválida. Por favor ingresa un número entero.")

        elif choice == '4':
            print("Saliendo de la aplicación. ¡Hasta luego!")
            sys.exit(0)

        else:
            print("Opción no válida. Por favor, elige una opción entre 1 y 4.")

if __name__ == "__main__":
    main()
