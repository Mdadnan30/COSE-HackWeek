import argparse

def celsius_to_farenheit(c):
    return (c * 9/5) + 32 

def fahrenheit_to_celsius(f):
    return (f - 32) * 5/9


parser = argparse.ArgumentParser(
    description="Convert Celsius to Farenheit."
)
parser.add_argument(
    "temperature",type=float,
    help="Temperature value to convert"
)
group = parser.add_mutually_exclusive_group(required=True)

group.add_argument(
    "-c","--c2f",action="store_true",
    help="Convert from Celsius to Farenheit"
)
group.add_argument(
    "-f","--f2c",action="store_true",
    help="Convert Farenheit to Celsius"
)

args = parser.parse_args()
if args.c2f:
    result = celsius_to_farenheit(args.temperature)
    print(f"{args.temperature}°C is {result:.2f}°F")
elif args.f2c:
    result = fahrenheit_to_celsius(args.temperature)
    print(f"{args.temperature}°F is {result:.2f}°C")