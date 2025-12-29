import { useState } from 'react';
import { ModuleCard } from './components/ModuleCard';
import { CodeBlock } from './components/CodeBlock';
import { ThemeToggle } from './components/ThemeToggle';
import { Sun, Moon, Code2, Sparkles } from 'lucide-react';

interface Module {
  id: number;
  title: string;
  emoji: string;
  topics: Topic[];
}

interface Topic {
  title: string;
  description: string;
  example?: string;
  codeExample?: string;
}

const modules: Module[] = [
  {
    id: 1,
    title: "Python Basics (Foundation)",
    emoji: "🚀",
    topics: [
      {
        title: "What is Python?",
        description: "Python is like a magic spell book that helps computers understand what you want them to do! It's a programming language that's super easy to learn - easier than learning to ride a bike!",
        example: "Just like you tell your friend 'let's play soccer', you can tell Python 'print Hello!' and it will show you a message!"
      },
      {
        title: "Features of Python",
        description: "Python has amazing superpowers! It's easy to read (like reading a storybook), free to use, works on any computer, and has tons of free tools!",
        example: "Python is like having a Swiss Army knife - one tool that can do many things!",
        codeExample: `# Python Features:
# 1. Easy to read and write
print("Hello World!")  # Simple!

# 2. Free and Open Source
# Anyone can use Python for FREE!

# 3. Cross-Platform
# Works on Windows, Mac, Linux

# 4. Huge Library Support
import math
print("Square root:", math.sqrt(16))

# 5. Object-Oriented
# Can create classes and objects`
      },
      {
        title: "Python Use Cases",
        description: "Python can do SO many cool things! Make websites, analyze data, create AI, automate boring tasks, and even make games!",
        codeExample: `# Python Use Cases:

# 1. WEB DEVELOPMENT (Django, Flask)
# Build websites like Instagram, YouTube!

# 2. DATA SCIENCE (Pandas, NumPy)
# Analyze numbers and make graphs

# 3. ARTIFICIAL INTELLIGENCE (TensorFlow, PyTorch)
# Create smart robots and chatbots!

# 4. AUTOMATION
# Make Python do boring tasks for you!
import os
print("Automating file operations...")

# 5. GAME DEVELOPMENT (Pygame)
# Create your own video games!

# 6. WEB SCRAPING
# Collect data from websites`
      },
      {
        title: "Python Keywords",
        description: "Keywords are special reserved words in Python that have special meanings. You can't use them as variable names!",
        codeExample: `# Python has 35 keywords. Here are the important ones:

# Flow Control Keywords
if True:
    print("This runs!")
else:
    print("This doesn't")

# Loop Keywords
for i in range(3):
    print(i)
    
while False:
    pass  # pass does nothing
    
# Boolean Keywords
is_fun = True
is_boring = False
result = None  # None means "nothing"

# Logical Keywords
if True and True:
    print("Both true!")
    
if True or False:
    print("At least one true!")
    
if not False:
    print("Not false means true!")

# Other Important Keywords:
# class, def, return, import, from, as
# try, except, finally, raise
# break, continue, lambda, with`
      },
      {
        title: "Python Syntax & Indentation",
        description: "Python uses spaces (indentation) to organize code - like organizing your room with shelves! Other languages use {} brackets, but Python uses spaces.",
        example: "Think of indentation like steps on a staircase - each level shows what belongs together!",
        codeExample: `# CORRECT INDENTATION ✅
if True:
    print("This is indented")
    print("This too!")
    if True:
        print("Double indented!")

# WRONG INDENTATION ❌
# if True:
# print("Error! Not indented")

# Indentation in loops
for i in range(3):
    print("Loop iteration:", i)
    print("Still in loop")
print("Outside loop now!")

# Indentation in functions
def greet():
    print("Hello!")
    print("Welcome!")
    
greet()`
      },
      {
        title: "Comments (Single-line & Multi-line)",
        description: "Comments are like secret notes you write for yourself. Python doesn't read them - they're just for you to remember what your code does!",
        codeExample: `# This is a single-line comment
# Python ignores this line!

# You can add comments to explain code
age = 10  # This stores my age

"""
This is a multi-line comment.
You can write many lines here.
It's like writing a note to yourself!
Python ignores everything between the triple quotes.
"""

'''
You can also use single quotes
for multi-line comments.
Both work the same way!
'''

print("Python only reads this line!")`
      },
      {
        title: "Print Statement",
        description: "The print() function shows messages on the screen. It's how your program talks to you!",
        codeExample: `# Basic printing
print("Hello World!")

# Printing multiple things
print("My name is", "Alex")
print("Age:", 10)

# Printing with different separators
print("A", "B", "C", sep="-")  # A-B-C
print("Python", "is", "fun", sep=" 🎉 ")

# Printing without new line
print("Hello", end=" ")
print("World!")  # Prints on same line

# Printing special characters
print("Line 1\\nLine 2")  # \\n = new line
print("Tab\\there")       # \\t = tab

# Printing variables
name = "Emma"
age = 11
print(f"My name is {name} and I'm {age} years old")
print("Name:", name, "Age:", age)`
      },
      {
        title: "Input from User",
        description: "You can ask questions and get answers! Just like asking your friend their favorite color.",
        codeExample: `# Ask for someone's name
name = input("What's your name? ")
print("Hi " + name + "! Nice to meet you!")

# Ask for favorite number
age = input("How old are you? ")
print("Wow! You are " + age + " years old!")

# Ask for favorite color
color = input("What's your favorite color? ")
print(f"Cool! {color} is a great color! 🌈")

# Converting input to number
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
total = num1 + num2
print(f"Sum: {total}")`
      },
      {
        title: "Variables & Naming Rules",
        description: "Variables are like boxes where you store things! You can put your toys, snacks, or numbers in these boxes and use them later.",
        example: "Think of a variable like a toy box. You can label it 'my_toys' and put different toys inside!",
        codeExample: `# Creating variables (boxes to store things)
my_name = "Alex"
my_age = 10
favorite_color = "blue"
has_pet = True

print("Name:", my_name)
print("Age:", my_age)

# VARIABLE NAMING RULES:

# ✅ CORRECT Names
student_name = "Emma"
age_2024 = 12
_private = "secret"
firstName = "John"  # camelCase
first_name = "Jane"  # snake_case (Python style)

# ❌ WRONG Names (Don't use these!)
# 2students = "error"  # Can't start with number
# my-name = "error"    # Can't use hyphens
# for = "error"        # Can't use keywords
# my name = "error"    # Can't have spaces

# Multiple assignment
x, y, z = 1, 2, 3
print(x, y, z)

# Same value to multiple variables
a = b = c = 100
print(a, b, c)`
      },
      {
        title: "Python Data Types Overview",
        description: "Python has different types of data - like having different types of toys: action figures, dolls, cars, etc.",
        codeExample: `# Numeric Types
integer = 42           # int - whole numbers
decimal = 3.14         # float - decimal numbers  
complex_num = 2 + 3j   # complex - advanced math

# Text Type
message = "Hello!"     # str - text/string

# Boolean Type
is_true = True         # bool - True or False
is_false = False

# Sequence Types
my_list = [1, 2, 3]           # list - ordered, changeable
my_tuple = (1, 2, 3)          # tuple - ordered, unchangeable
my_range = range(5)           # range - sequence of numbers

# Mapping Type
my_dict = {"name": "Alex"}    # dict - key:value pairs

# Set Types
my_set = {1, 2, 3}           # set - unordered, unique items
frozen = frozenset({1, 2})   # frozenset - unchangeable set

# Binary Types (advanced)
my_bytes = b"Hello"          # bytes
my_array = bytearray(5)      # bytearray

# None Type
nothing = None               # None - represents "nothing"

# Check type of any variable
print(type(integer))   # <class 'int'>
print(type(message))   # <class 'str'>
print(type(my_list))   # <class 'list'>`
      },
      {
        title: "type() and id() Functions",
        description: "type() tells you what kind of data you have. id() gives each variable a unique identification number!",
        example: "type() is like asking 'what kind of toy is this?', id() is like each toy having a unique serial number!",
        codeExample: `# type() function - check data type
age = 10
name = "Emma"
numbers = [1, 2, 3]

print(type(age))      # <class 'int'>
print(type(name))     # <class 'str'>
print(type(numbers))  # <class 'list'>

# id() function - unique memory address
x = 100
y = 100
z = "hello"

print("ID of x:", id(x))
print("ID of y:", id(y))  # Same as x!
print("ID of z:", id(z))  # Different

# Checking if types match
if type(age) == int:
    print("age is an integer!")
    
# isinstance() - better way to check type
if isinstance(name, str):
    print("name is a string!")
    
# Check multiple types
value = 3.14
if isinstance(value, (int, float)):
    print("value is a number!")`
      }
    ]
  },
  {
    id: 2,
    title: "Data Types & Variables",
    emoji: "🎯",
    topics: [
      {
        title: "Numbers - Integers (int)",
        description: "Integers are whole numbers - like counting your toys: 1, 2, 3, 100! No decimal points here.",
        example: "If you have 5 apples, that's an integer. If you have 10 marbles, that's also an integer!",
        codeExample: `# Integer examples
apples = 5
marbles = 10
age = 12
score = 100

print("I have", apples, "apples")
print("My age is", age)
print("Game score:", score)`
      },
      {
        title: "Numbers - Floats (Decimal Numbers)",
        description: "Floats are numbers with decimal points - like measuring height: 4.5 feet, or price: $3.99",
        codeExample: `# Float examples
height = 4.5
price = 3.99
temperature = 98.6
pizza_slices = 2.5

print("Height:", height, "feet")
print("Price: $", price)
print("I ate", pizza_slices, "slices")`
      },
      {
        title: "Boolean - True or False",
        description: "Boolean is like a light switch - it's either ON (True) or OFF (False). Yes or No. Simple!",
        example: "Is it raining? True or False. Do you like ice cream? True or False!",
        codeExample: `# Boolean examples
is_sunny = True
is_raining = False
loves_pizza = True
homework_done = False

print("Is it sunny?", is_sunny)
print("Is it raining?", is_raining)
print("Homework done?", homework_done)`
      },
      {
        title: "Strings - Text and Words",
        description: "Strings are text - like your name, favorite song, or anything with letters and words!",
        codeExample: `# String examples
name = "Emma"
favorite_game = "Minecraft"
message = "I love learning Python!"

print(name)
print("Favorite game:", favorite_game)
print(message)`
      },
      {
        title: "String Slicing - Cutting Text",
        description: "You can slice strings like cutting a pizza! Get the first letter, last letter, or middle part.",
        example: "If you have the word 'PYTHON', you can take just 'PY' or 'THON' or any part you want!",
        codeExample: `# String slicing is like cutting words
word = "PYTHON"

print(word[0])      # First letter: P
print(word[0:2])    # First 2 letters: PY
print(word[2:])     # From 3rd letter: THON
print(word[-1])     # Last letter: N
print(word[::-1])   # Reverse: NOHTYP`
      },
      {
        title: "Type Casting - Changing Types",
        description: "Type casting is like transforming! You can turn text into numbers or numbers into text.",
        codeExample: `# Converting between types
age_text = "10"
age_number = int(age_text)  # Text to number
print(age_number + 5)        # Now we can do math: 15

score = 100
score_text = str(score)     # Number to text
print("Score: " + score_text)

# Text to float
price = float("3.99")
print(price)`
      }
    ]
  },
  {
    id: 3,
    title: "Operators in Python",
    emoji: "➕",
    topics: [
      {
        title: "Arithmetic Operators - Do the Math!",
        description: "Math operators help you add, subtract, multiply, and divide - just like in your math class!",
        codeExample: `# Math operations
apples = 5 + 3      # Addition: 8
left = 10 - 4       # Subtraction: 6
total = 6 * 7       # Multiplication: 42
share = 20 / 4      # Division: 5.0
floor_div = 20 // 3 # Floor Division: 6 (no decimal)
remainder = 17 % 5  # Modulus (Remainder): 2
power = 2 ** 3      # Exponent (Power): 8

print("Addition:", apples)
print("Multiplication:", total)
print("Power of 2^3:", power)
print("Remainder:", remainder)
print("Floor Division:", floor_div)`
      },
      {
        title: "Relational/Comparison Operators",
        description: "Compare things to see if they're equal, bigger, or smaller - like comparing your height with friends!",
        codeExample: `# Comparing values
my_age = 10
friend_age = 12

print(my_age == friend_age)  # Equal? False
print(my_age != friend_age)  # Not equal? True
print(my_age < friend_age)   # Less than? True
print(my_age > friend_age)   # Greater than? False
print(my_age <= 10)          # Less or equal? True
print(my_age >= 10)          # Greater or equal? True

# Comparing strings
name1 = "Alice"
name2 = "Bob"
print(name1 == name2)  # False
print(name1 < name2)   # True (alphabetically)`
      },
      {
        title: "Assignment Operators",
        description: "Assignment operators give values to variables and can do math at the same time!",
        codeExample: `# Basic assignment
x = 10
print("x =", x)

# Add and assign
x += 5  # Same as: x = x + 5
print("After x += 5:", x)  # 15

# Subtract and assign
x -= 3  # Same as: x = x - 3
print("After x -= 3:", x)  # 12

# Multiply and assign
x *= 2  # Same as: x = x * 2
print("After x *= 2:", x)  # 24

# Divide and assign
x /= 4  # Same as: x = x / 4
print("After x /= 4:", x)  # 6.0

# Modulus and assign
x %= 4  # Same as: x = x % 4
print("After x %= 4:", x)  # 2.0

# Power and assign
x **= 3  # Same as: x = x ** 3
print("After x **= 3:", x)  # 8.0`
      },
      {
        title: "Logical Operators - AND, OR, NOT",
        description: "Use AND, OR, NOT to combine conditions - like 'If it's sunny AND warm, let's go to the park!'",
        codeExample: `# Logical operators
is_sunny = True
is_warm = True
has_homework = False

# AND - Both must be True
can_play_outside = is_sunny and is_warm
print("Can play outside?", can_play_outside)  # True

# OR - At least one must be True
weekend_or_holiday = True or False
print("Time to relax?", weekend_or_holiday)  # True

# NOT - Opposite
print("No homework?", not has_homework)  # True

# Combining logical operators
age = 10
has_permission = True
if age >= 10 and has_permission:
    print("You can go to the party! 🎉")`
      },
      {
        title: "Bitwise Operators",
        description: "Bitwise operators work with binary numbers (0s and 1s) - like computer language!",
        example: "Computers think in 0s and 1s. Bitwise operators let you work directly with binary!",
        codeExample: `# Bitwise operators work with binary
a = 5   # Binary: 101
b = 3   # Binary: 011

# AND - both bits must be 1
print("a & b =", a & b)   # 1 (Binary: 001)

# OR - at least one bit is 1
print("a | b =", a | b)   # 7 (Binary: 111)

# XOR - bits are different
print("a ^ b =", a ^ b)   # 6 (Binary: 110)

# NOT - flip all bits
print("~a =", ~a)         # -6

# Left shift - move bits left
print("a << 1 =", a << 1) # 10 (Binary: 1010)

# Right shift - move bits right
print("a >> 1 =", a >> 1) # 2 (Binary: 10)`
      },
      {
        title: "Membership Operators - IN and NOT IN",
        description: "Check if something is inside a list, string, or collection!",
        example: "Like checking if your favorite toy is in your toy box!",
        codeExample: `# Membership operators
fruits = ["apple", "banana", "orange"]

# IN - check if item exists
if "apple" in fruits:
    print("Yes! Apple is in the list! 🍎")

if "grape" not in fruits:
    print("Grape is not in the list!")

# Works with strings too
message = "Python is fun!"
if "fun" in message:
    print("Found the word 'fun'!")

# Works with dictionaries (checks keys)
student = {"name": "Emma", "age": 11}
if "name" in student:
    print("Name key exists!")

# Check in range
if 5 in range(1, 10):
    print("5 is in the range!")`
      },
      {
        title: "Identity Operators - IS and IS NOT",
        description: "Identity operators check if two variables point to the SAME object in memory!",
        example: "Like checking if two people are the exact same person, not just twins!",
        codeExample: `# Identity operators
a = [1, 2, 3]
b = [1, 2, 3]
c = a

# IS - check if same object
print(a is c)      # True (c points to same list as a)
print(a is b)      # False (different objects, same content)

# IS NOT - check if different objects
print(a is not b)  # True

# == vs IS difference
print(a == b)      # True (same content)
print(a is b)      # False (different objects)

# With numbers (Python optimizes small numbers)
x = 10
y = 10
print(x is y)      # True (Python reuses small integers)

# None check (best practice)
value = None
if value is None:
    print("Value is None!")`
      },
      {
        title: "Operator Precedence",
        description: "Operator precedence is the order Python solves math - like PEMDAS in math class!",
        example: "Just like in math: Parentheses, Exponents, Multiply/Divide, Add/Subtract!",
        codeExample: `# Operator Precedence (high to low)

# 1. Parentheses first
result = (2 + 3) * 4
print("(2 + 3) * 4 =", result)  # 20

# 2. Exponents
result = 2 ** 3 * 2
print("2 ** 3 * 2 =", result)   # 16 (not 64)

# 3. Multiplication and Division (left to right)
result = 10 / 2 * 3
print("10 / 2 * 3 =", result)   # 15.0

# 4. Addition and Subtraction (left to right)
result = 10 - 3 + 2
print("10 - 3 + 2 =", result)   # 9

# Complex example
result = 2 + 3 * 4 ** 2 / 2 - 1
# Step 1: 4 ** 2 = 16
# Step 2: 3 * 16 = 48
# Step 3: 48 / 2 = 24
# Step 4: 2 + 24 = 26
# Step 5: 26 - 1 = 25
print("Complex:", result)       # 25.0

# Use parentheses for clarity!
result = ((2 + 3) * 4) ** 2
print("With parentheses:", result)  # 400`
      }
    ]
  },
  {
    id: 4,
    title: "Control Flow - Making Choices",
    emoji: "🔀",
    topics: [
      {
        title: "If Statement - Making Decisions",
        description: "If statements help your program make decisions - like 'If it's raining, take an umbrella!'",
        example: "Just like you decide what to wear based on the weather!",
        codeExample: `# Simple if statement
age = 10

if age >= 10:
    print("You're old enough to ride the big slide!")
    
weather = "sunny"

if weather == "sunny":
    print("Let's go to the park! ☀️")`
      },
      {
        title: "If-Else - Two Choices",
        description: "If-else gives you two options - like choosing chocolate OR vanilla ice cream!",
        codeExample: `# If-else statement
score = 85

if score >= 90:
    print("Amazing! You got an A! 🌟")
else:
    print("Good job! Keep practicing! 💪")
    
is_weekend = True

if is_weekend:
    print("Yay! Time to play! 🎮")
else:
    print("Time for school! 📚")`
      },
      {
        title: "If-Elif-Else - Multiple Choices",
        description: "When you have more than two choices - like picking from many flavors of ice cream!",
        codeExample: `# Multiple conditions
temperature = 75

if temperature > 85:
    print("It's hot! Go swimming! 🏊")
elif temperature > 65:
    print("Perfect weather! Play outside! ⚽")
elif temperature > 45:
    print("A bit chilly! Wear a jacket! 🧥")
else:
    print("It's cold! Stay warm inside! 🏠")`
      },
      {
        title: "For Loop - Repeat Actions",
        description: "For loops help you do something many times - like counting from 1 to 10 without writing 10 lines!",
        example: "Instead of writing 'Happy Birthday' 10 times, let the loop do it!",
        codeExample: `# Counting with for loop
for i in range(1, 6):
    print("Count:", i)

# Looping through a list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print("I like", fruit)
    
# Repeat message
for i in range(3):
    print("Python is fun! 🐍")`
      },
      {
        title: "While Loop - Keep Going Until...",
        description: "While loops keep going as long as something is true - like eating cookies while there are cookies left!",
        codeExample: `# While loop example
cookies = 5

while cookies > 0:
    print("Eating a cookie! Yum! 🍪")
    cookies = cookies - 1
    print("Cookies left:", cookies)

print("All cookies gone! 😢")

# Countdown
count = 5
while count > 0:
    print(count)
    count -= 1
print("Blast off! 🚀")`
      },
      {
        title: "Break and Continue",
        description: "Break stops the loop completely. Continue skips to the next round!",
        codeExample: `# Break - stop the loop
for i in range(1, 11):
    if i == 5:
        print("Found 5! Stopping here!")
        break
    print(i)

# Continue - skip to next
for i in range(1, 6):
    if i == 3:
        continue  # Skip 3
    print(i)`
      }
    ]
  },
  {
    id: 5,
    title: "Data Structures - Organizing Data",
    emoji: "📦",
    topics: [
      {
        title: "Lists - Collections of Items",
        description: "Lists are like toy boxes! You can put many things inside and organize them in order.",
        example: "Your backpack is like a list - it has books, pencils, snacks, all organized together!",
        codeExample: `# Creating lists
toys = ["car", "doll", "puzzle", "ball"]
numbers = [1, 2, 3, 4, 5]
mixed = ["apple", 10, True, 3.14]

print("My toys:", toys)
print("First toy:", toys[0])
print("Last toy:", toys[-1])

# Add to list
toys.append("robot")
print("After adding:", toys)`
      },
      {
        title: "List Methods - Cool List Tricks",
        description: "Lists have special powers! You can add, remove, sort, and do lots of cool things!",
        codeExample: `# List methods
fruits = ["banana", "apple", "orange"]

# Add item
fruits.append("grape")
print("After append:", fruits)

# Sort alphabetically
fruits.sort()
print("Sorted:", fruits)

# Remove item
fruits.remove("apple")
print("After remove:", fruits)

# Count and find
print("Length:", len(fruits))`
      },
      {
        title: "Tuples - Fixed Collections",
        description: "Tuples are like lists but you CAN'T change them - like days of the week, they're fixed!",
        codeExample: `# Creating tuples
weekdays = ("Mon", "Tue", "Wed", "Thu", "Fri")
colors = ("red", "blue", "green")
single = (42,)  # Single item tuple needs comma!

print("Weekdays:", weekdays)
print("First day:", weekdays[0])

# Can't change tuples!
# weekdays[0] = "Sunday"  # This would cause an error!

# But you can use them
for day in weekdays:
    print(day)`
      },
      {
        title: "Tuple Methods & Operations",
        description: "Tuples have fewer methods than lists, but they're super useful for counting and finding items!",
        codeExample: `# Tuple methods
numbers = (1, 2, 3, 2, 4, 2, 5)

# Count occurrences
print("Count of 2:", numbers.count(2))  # 3

# Find index
print("Index of 3:", numbers.index(3))  # 2

# Tuple operations
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)

# Concatenation
combined = tuple1 + tuple2
print("Combined:", combined)  # (1, 2, 3, 4, 5, 6)

# Repetition
repeated = tuple1 * 3
print("Repeated:", repeated)  # (1, 2, 3, 1, 2, 3, 1, 2, 3)

# Length
print("Length:", len(tuple1))

# Min and Max
print("Min:", min(numbers))
print("Max:", max(numbers))`
      },
      {
        title: "Tuple Packing & Unpacking",
        description: "Packing is putting values into a tuple. Unpacking is taking them out - like packing and unpacking a suitcase!",
        example: "Perfect for swapping variables or returning multiple values from functions!",
        codeExample: `# TUPLE PACKING - creating tuple without parentheses
coordinates = 10, 20, 30
print(coordinates)  # (10, 20, 30)

# TUPLE UNPACKING - extract values
x, y, z = coordinates
print(f"x={x}, y={y}, z={z}")

# Swapping variables (using unpacking!)
a = 5
b = 10
a, b = b, a  # Swap!
print(f"a={a}, b={b}")  # a=10, b=5

# Unpacking with *
first, *middle, last = (1, 2, 3, 4, 5)
print("First:", first)    # 1
print("Middle:", middle)  # [2, 3, 4]
print("Last:", last)      # 5

# Function returning multiple values
def get_student():
    return "Emma", 11, "A"  # Returns tuple

name, age, grade = get_student()
print(f"{name} is {age} years old, grade {grade}")`
      },
      {
        title: "Sets - Unique Collections",
        description: "Sets only keep unique items - no duplicates! Like having one of each toy, not two of the same.",
        codeExample: `# Creating sets
unique_numbers = {1, 2, 3, 4, 5}
fruits = {"apple", "banana", "apple"}  # 'apple' appears once

print("Fruits:", fruits)  # Only shows apple once!

# Add to set
fruits.add("orange")
print("After adding:", fruits)

# Remove from set
fruits.remove("banana")
print("After removing:", fruits)`
      },
      {
        title: "Set Methods & Operations",
        description: "Sets have cool mathematical operations - union, intersection, difference! Like Venn diagrams!",
        example: "Find what's common, what's different, or combine sets together!",
        codeExample: `# Set methods
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# UNION - all items from both sets
union = set1.union(set2)
# or: union = set1 | set2
print("Union:", union)  # {1, 2, 3, 4, 5, 6, 7, 8}

# INTERSECTION - only items in both
intersection = set1.intersection(set2)
# or: intersection = set1 & set2
print("Intersection:", intersection)  # {4, 5}

# DIFFERENCE - items in first but not second
diff = set1.difference(set2)
# or: diff = set1 - set2
print("Difference:", diff)  # {1, 2, 3}

# SYMMETRIC DIFFERENCE - items in one but not both
sym_diff = set1.symmetric_difference(set2)
# or: sym_diff = set1 ^ set2
print("Symmetric Diff:", sym_diff)  # {1, 2, 3, 6, 7, 8}

# Other methods
set1.add(10)           # Add item
set1.discard(2)        # Remove (no error if missing)
# set1.remove(99)      # Remove (error if missing)
set1.clear()           # Remove all
print("Is empty?", len(set1) == 0)`
      },
      {
        title: "Dictionaries - Pairs of Information",
        description: "Dictionaries store pairs - like a real dictionary pairs words with meanings! Key + Value.",
        example: "Like a phone book: Name (key) → Phone Number (value)",
        codeExample: `# Creating dictionary
student = {
    "name": "Emma",
    "age": 11,
    "grade": 6,
    "favorite_subject": "Math"
}

print("Student info:", student)
print("Name:", student["name"])
print("Age:", student["age"])

# Add new info
student["hobby"] = "drawing"
print("Updated:", student)`
      },
      {
        title: "Dictionary Methods - Powerful Tools",
        description: "Dictionaries have many useful methods to get keys, values, items, and more!",
        codeExample: `# Dictionary methods
student = {"name": "Emma", "age": 11, "grade": "A"}

# Get all keys
print("Keys:", student.keys())  
# dict_keys(['name', 'age', 'grade'])

# Get all values
print("Values:", student.values())
# dict_values(['Emma', 11, 'A'])

# Get all items (key-value pairs)
print("Items:", student.items())
# dict_items([('name', 'Emma'), ('age', 11), ('grade', 'A')])

# Get value safely (no error if missing)
print(student.get("name"))     # Emma
print(student.get("hobby"))    # None
print(student.get("hobby", "Unknown"))  # Unknown

# Update dictionary
student.update({"age": 12, "school": "Python Elementary"})
print("Updated:", student)

# Remove item
removed = student.pop("grade")
print("Removed:", removed)  # A

# Copy dictionary
student_copy = student.copy()

# Clear all items
# student.clear()`
      },
      {
        title: "Iterating Through Dictionaries",
        description: "You can loop through dictionaries to access keys, values, or both!",
        example: "Like going through each contact in your phone book!",
        codeExample: `student = {
    "name": "Emma",
    "age": 11,
    "grade": "A",
    "subject": "Math"
}

# Iterate through keys (default)
for key in student:
    print(key)  # name, age, grade, subject

# Iterate through keys explicitly
for key in student.keys():
    print(f"Key: {key}")

# Iterate through values
for value in student.values():
    print(f"Value: {value}")

# Iterate through both (most common!)
for key, value in student.items():
    print(f"{key}: {value}")

# Example: Game inventory
inventory = {
    "sword": 1,
    "shield": 2,
    "potion": 5,
    "gold": 100
}

for item, quantity in inventory.items():
    print(f"You have {quantity} {item}(s)")

# Dictionary comprehension
squared = {x: x**2 for x in range(1, 6)}
print("Squared:", squared)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}`
      },
      {
        title: "List Comprehension - Quick Lists",
        description: "A super fast way to create lists! It's like a shortcut to make lists in one line.",
        codeExample: `# Regular way
squares = []
for i in range(1, 6):
    squares.append(i * i)
print("Squares:", squares)

# List comprehension - faster!
squares_fast = [i * i for i in range(1, 6)]
print("Squares (fast):", squares_fast)

# Even numbers
evens = [i for i in range(1, 11) if i % 2 == 0]
print("Even numbers:", evens)`
      }
    ]
  },
  {
    id: 6,
    title: "Functions - Reusable Code Blocks",
    emoji: "🔧",
    topics: [
      {
        title: "What is a Function?",
        description: "Functions are like recipes! You write the steps once, then use them anytime you want - no need to rewrite!",
        example: "Like a recipe for making a sandwich - you can make it whenever you're hungry without rewriting the steps!",
        codeExample: `# Creating a function
def say_hello():
    print("Hello! 👋")
    print("Welcome to Python!")
    
# Using the function
say_hello()
say_hello()  # Can use it many times!`
      },
      {
        title: "Functions with Parameters",
        description: "Functions can accept inputs - like giving ingredients to a recipe to make different dishes!",
        codeExample: `# Function with parameters
def greet(name):
    print(f"Hello {name}! 🌟")
    print(f"Nice to meet you, {name}!")
    
greet("Emma")
greet("Alex")
greet("Sam")

# Function with multiple parameters
def add_numbers(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")
    
add_numbers(5, 3)
add_numbers(10, 7)`
      },
      {
        title: "Return Statement - Get Results Back",
        description: "Functions can give you back a result - like a vending machine giving you candy!",
        codeExample: `# Function that returns a value
def multiply(a, b):
    return a * b
    
result = multiply(5, 4)
print("5 x 4 =", result)

# Function for calculating area
def rectangle_area(length, width):
    area = length * width
    return area
    
my_area = rectangle_area(10, 5)
print("Area:", my_area, "square units")`
      },
      {
        title: "Default Parameters",
        description: "You can give parameters default values - like ordering a pizza that comes with cheese by default!",
        codeExample: `# Function with default parameter
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")
    
greet("Emma")              # Uses default "Hello"
greet("Alex", "Hi")        # Uses custom "Hi"
greet("Sam", "Good morning")

def make_smoothie(fruit="banana", size="medium"):
    print(f"Making a {size} {fruit} smoothie! 🥤")
    
make_smoothie()
make_smoothie("strawberry")
make_smoothie("mango", "large")`
      },
      {
        title: "Lambda Functions - Quick Mini Functions",
        description: "Lambda functions are tiny one-line functions - like a shortcut for simple tasks!",
        codeExample: `# Regular function
def square(x):
    return x * x

# Lambda function - same thing but shorter!
square_lambda = lambda x: x * x

print(square(5))         # 25
print(square_lambda(5))  # 25

# Lambda with two parameters
add = lambda a, b: a + b
print(add(3, 7))  # 10

# Lambda to double numbers
double = lambda x: x * 2
print(double(10))  # 20`
      },
      {
        title: "*args and **kwargs - Variable Length Arguments",
        description: "Sometimes you don't know how many arguments a function will get. *args and **kwargs let you accept any number!",
        example: "Like a pizza that can have any number of toppings!",
        codeExample: `# *args - for any number of positional arguments
def add_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(add_all(1, 2, 3))        # 6
print(add_all(1, 2, 3, 4, 5))  # 15

# **kwargs - for any number of keyword arguments
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="Emma", age=11, hobby="drawing")
print_info(game="Minecraft", score=100)`
      },
      {
        title: "map() - Transform Every Item",
        description: "map() applies a function to every item in a list - like adding sprinkles to every cupcake!",
        codeExample: `# Using map() with lambda
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
print("Doubled:", doubled)  # [2, 4, 6, 8, 10]

# Map with regular function
def square(x):
    return x * x

squared = list(map(square, numbers))
print("Squared:", squared)  # [1, 4, 9, 16, 25]

# Map on strings
names = ["emma", "alex", "sam"]
uppercase = list(map(str.upper, names))
print("Uppercase:", uppercase)  # ['EMMA', 'ALEX', 'SAM']`
      },
      {
        title: "filter() - Keep Only What You Want",
        description: "filter() keeps only items that pass a test - like picking only red candies from a bag!",
        codeExample: `# Filter even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print("Even numbers:", evens)  # [2, 4, 6, 8, 10]

# Filter names longer than 4 letters
names = ["Emma", "Alexander", "Jo", "Samantha"]
long_names = list(filter(lambda x: len(x) > 4, names))
print("Long names:", long_names)

# Filter positive numbers
nums = [-5, 3, -1, 8, -2, 10]
positives = list(filter(lambda x: x > 0, nums))
print("Positive:", positives)  # [3, 8, 10]`
      },
      {
        title: "reduce() - Combine Everything Together",
        description: "reduce() combines all items into one result - like mixing all ingredients into one smoothie!",
        codeExample: `from functools import reduce

# Sum all numbers
numbers = [1, 2, 3, 4, 5]
total = reduce(lambda x, y: x + y, numbers)
print("Sum:", total)  # 15

# Find maximum
nums = [3, 7, 2, 9, 4]
maximum = reduce(lambda x, y: x if x > y else y, nums)
print("Max:", maximum)  # 9

# Multiply all numbers
result = reduce(lambda x, y: x * y, [1, 2, 3, 4])
print("Product:", result)  # 24`
      },
      {
        title: "Recursive Functions - Functions That Call Themselves",
        description: "A recursive function is like a magic mirror that shows itself! It calls itself to solve problems.",
        example: "Like counting down: 5... 4... 3... 2... 1... Blast off!",
        codeExample: `# Countdown recursively
def countdown(n):
    if n == 0:
        print("Blast off! 🚀")
    else:
        print(n)
        countdown(n - 1)

countdown(5)

# Factorial (5! = 5 × 4 × 3 × 2 × 1)
def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print("5! =", factorial(5))  # 120

# Sum of numbers from 1 to n
def sum_to_n(n):
    if n == 1:
        return 1
    return n + sum_to_n(n - 1)

print("Sum 1 to 10:", sum_to_n(10))  # 55`
      }
    ]
  },
  {
    id: 7,
    title: "Modules & Packages",
    emoji: "📚",
    topics: [
      {
        title: "What is a Module?",
        description: "Modules are like toolboxes! They contain pre-written code you can use in your programs.",
        example: "Just like borrowing your friend's LEGO set to build something cool!",
        codeExample: `# Importing the math module
import math

print("Pi:", math.pi)
print("Square root of 16:", math.sqrt(16))

# Import specific things
from math import sqrt, pi
print("Using imported pi:", pi)
print("Square root of 25:", sqrt(25))`
      },
      {
        title: "Using Random Module - Surprises!",
        description: "The random module helps you create random things - like rolling dice or shuffling cards!",
        codeExample: `# Import random module
import random

# Random number between 1 and 10
dice = random.randint(1, 6)
print("You rolled:", dice, "🎲")

# Random choice from a list
colors = ["red", "blue", "green", "yellow"]
lucky_color = random.choice(colors)
print("Your lucky color:", lucky_color)

# Shuffle a list
cards = ["A", "K", "Q", "J", "10"]
random.shuffle(cards)
print("Shuffled cards:", cards)`
      },
      {
        title: "Creating Your Own Module",
        description: "You can create your own modules - like making your own toolbox with your favorite tools!",
        codeExample: `# Save this in a file called my_tools.py
def say_hello(name):
    return f"Hello {name}!"
    
def add(a, b):
    return a + b
    
def favorite_food():
    return "Pizza! 🍕"

# In another file, import and use it:
# import my_tools
# print(my_tools.say_hello("Emma"))
# print(my_tools.favorite_food())`
      }
    ]
  },
  {
    id: 8,
    title: "File Handling - Reading & Writing Files",
    emoji: "📁",
    topics: [
      {
        title: "Writing to a File",
        description: "You can save information to files - like writing in a diary and saving it!",
        codeExample: `# Writing to a file
file = open("my_story.txt", "w")
file.write("Once upon a time... 📖\\n")
file.write("There was a Python programmer.\\n")
file.write("They loved to code! 💻\\n")
file.close()

print("Story saved to file!")

# Better way using 'with'
with open("favorite_things.txt", "w") as f:
    f.write("Favorite color: Blue\\n")
    f.write("Favorite food: Pizza\\n")
    f.write("Favorite game: Minecraft\\n")`
      },
      {
        title: "Reading from a File",
        description: "You can read information from files - like reading your diary from yesterday!",
        codeExample: `# Reading from a file
with open("my_story.txt", "r") as file:
    content = file.read()
    print(content)

# Reading line by line
with open("favorite_things.txt", "r") as file:
    for line in file:
        print(line.strip())  # strip removes extra spaces`
      },
      {
        title: "Appending to a File",
        description: "Append means adding to the end - like adding more pages to your diary!",
        codeExample: `# Append to existing file
with open("my_story.txt", "a") as file:
    file.write("And they lived happily ever after! 🎉\\n")
    file.write("The End.\\n")

print("Added more to the story!")

# Appending more favorites
with open("favorite_things.txt", "a") as f:
    f.write("Favorite animal: Dog 🐕\\n")
    f.write("Favorite sport: Soccer ⚽\\n")`
      },
      {
        title: "File Modes - All the Ways to Open Files",
        description: "File modes tell Python HOW you want to open a file - read only, write, append, or create new!",
        example: "Like choosing if you want to read a book, write a new book, or add pages to an existing book!",
        codeExample: `# File Modes:

# 'r' - Read mode (default)
# Opens file for reading. Error if file doesn't exist.
with open("story.txt", "r") as f:
    content = f.read()

# 'w' - Write mode
# Creates new file or OVERWRITES existing file
with open("new_file.txt", "w") as f:
    f.write("Starting fresh!")

# 'a' - Append mode
# Adds to end of file, creates if doesn't exist
with open("log.txt", "a") as f:
    f.write("New log entry\\n")

# 'x' - Exclusive creation
# Creates file, ERROR if file already exists
with open("unique.txt", "x") as f:
    f.write("This file must be new!")

# 'r+' - Read and write
# Can read AND write, file must exist
with open("data.txt", "r+") as f:
    content = f.read()
    f.write("Adding more!")

# 'rb' - Read binary (for images, etc.)
# 'wb' - Write binary`
      },
      {
        title: "Working with CSV Files",
        description: "CSV (Comma Separated Values) files store data in tables - like a spreadsheet! Perfect for storing lists of information.",
        example: "Like a class roster with names, ages, and grades all organized in columns!",
        codeExample: `import csv

# Writing to CSV file
students = [
    ["Name", "Age", "Grade"],
    ["Emma", 11, "A"],
    ["Alex", 12, "B"],
    ["Sam", 11, "A+"]
]

with open("students.csv", "w", newline='') as file:
    writer = csv.writer(file)
    writer.writerows(students)
    
print("CSV file created! 📊")

# Reading from CSV file
with open("students.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

# Using DictWriter (with headers)
students_dict = [
    {"name": "Emma", "age": 11, "grade": "A"},
    {"name": "Alex", "age": 12, "grade": "B"}
]

with open("students2.csv", "w", newline='') as file:
    fieldnames = ["name", "age", "grade"]
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(students_dict)`
      },
      {
        title: "Working with JSON Files",
        description: "JSON stores data in a format that's easy for both humans and computers to read! Like Python dictionaries saved to files.",
        example: "JSON is like saving your game progress - all your data organized and ready to load later!",
        codeExample: `import json

# Python dictionary
player_data = {
    "name": "SuperGamer",
    "level": 25,
    "score": 10500,
    "inventory": ["sword", "shield", "potion"],
    "is_premium": True
}

# Writing JSON to file
with open("game_save.json", "w") as file:
    json.dump(player_data, file, indent=2)
    
print("Game saved! 💾")

# Reading JSON from file
with open("game_save.json", "r") as file:
    loaded_data = json.load(file)
    print("Loaded data:", loaded_data)
    print("Player name:", loaded_data["name"])
    print("Level:", loaded_data["level"])

# Convert Python to JSON string
json_string = json.dumps(player_data, indent=2)
print("JSON string:", json_string)

# Convert JSON string to Python
python_data = json.loads(json_string)
print("Python data:", python_data)`
      },
      {
        title: "Using 'with' Statement - Auto-Close Files",
        description: "The 'with' statement automatically closes files when done - like a door that closes itself!",
        example: "You don't have to remember to close the file, Python does it for you!",
        codeExample: `# WITHOUT 'with' - you must close manually
file = open("manual.txt", "w")
file.write("Don't forget to close me!")
file.close()  # Must remember this!

# WITH 'with' - auto-closes! ✨
with open("auto.txt", "w") as file:
    file.write("I'll close automatically!")
# File is already closed here!

# Multiple files at once
with open("input.txt", "r") as infile, open("output.txt", "w") as outfile:
    content = infile.read()
    outfile.write(content.upper())

# Even if error occurs, file still closes!
try:
    with open("data.txt", "r") as f:
        content = f.read()
        # Some code that might cause error
except:
    print("Error happened, but file is still closed!")`
      }
    ]
  },
  {
    id: 9,
    title: "Exception Handling - Dealing with Errors",
    emoji: "🛡️",
    topics: [
      {
        title: "What are Exceptions?",
        description: "Exceptions are errors that happen when your code runs - like trying to divide by zero or opening a file that doesn't exist!",
        example: "It's like trying to eat from an empty plate - something's not right!",
        codeExample: `# This would cause an error without handling
try:
    result = 10 / 0  # Can't divide by zero!
except:
    print("Oops! Can't divide by zero! 😅")
    
print("Program continues...")

# Better error handling
try:
    number = int("hello")  # Can't convert text to number
except ValueError:
    print("That's not a number! 🤔")`
      },
      {
        title: "Try-Except-Else-Finally",
        description: "A complete error handling system! Try something, handle errors, run code if no errors, and always run cleanup code.",
        codeExample: `# Complete exception handling
try:
    num = int(input("Enter a number: "))
    result = 100 / num
except ValueError:
    print("Please enter a valid number!")
except ZeroDivisionError:
    print("Can't divide by zero!")
else:
    print(f"Result: {result}")
finally:
    print("Thanks for using the calculator! 🧮")`
      },
      {
        title: "Raising Exceptions",
        description: "You can create your own errors when something isn't right - like a referee calling a foul!",
        codeExample: `# Raising custom exceptions
def check_age(age):
    if age < 0:
        raise ValueError("Age can't be negative! 🚫")
    elif age < 13:
        raise ValueError("Sorry, must be 13+ for this game!")
    else:
        print("Welcome to the game! 🎮")

try:
    check_age(10)
except ValueError as e:
    print("Error:", e)`
      }
    ]
  },
  {
    id: 10,
    title: "Object-Oriented Programming (OOP)",
    emoji: "🏗️",
    topics: [
      {
        title: "What is a Class and Object?",
        description: "A class is like a blueprint for making things. An object is the actual thing you create from the blueprint!",
        example: "A cookie cutter is a class. The cookies you make are objects!",
        codeExample: `# Creating a class
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        print(f"{self.name} says: Woof! 🐕")
    
    def birthday(self):
        self.age += 1
        print(f"{self.name} is now {self.age} years old!")

# Creating objects
my_dog = Dog("Buddy", 3)
friend_dog = Dog("Max", 5)

my_dog.bark()
friend_dog.bark()
my_dog.birthday()`
      },
      {
        title: "Class with More Features",
        description: "Classes can have many features - like a car has wheels, color, engine, horn, etc.!",
        codeExample: `# A more detailed class
class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade
        self.subjects = []
    
    def add_subject(self, subject):
        self.subjects.append(subject)
        print(f"{subject} added! 📚")
    
    def show_info(self):
        print(f"Name: {self.name}")
        print(f"Grade: {self.grade}")
        print(f"Subjects: {', '.join(self.subjects)}")

# Create a student
emma = Student("Emma", 6)
emma.add_subject("Math")
emma.add_subject("Science")
emma.show_info()`
      },
      {
        title: "Constructor (__init__) - Detailed",
        description: "The __init__ method is a special constructor that runs automatically when you create an object - like setting up a new toy when you unbox it!",
        example: "When you create a new character in a game, __init__ sets up their starting health, name, and level!",
        codeExample: `# Constructor in detail
class Player:
    def __init__(self, name, health=100, level=1):
        # These run automatically when object is created
        self.name = name
        self.health = health
        self.level = level
        print(f"Player {name} created! 🎮")
    
    def show_stats(self):
        print(f"Name: {self.name}")
        print(f"Health: {self.health}")
        print(f"Level: {self.level}")

# Creating objects - __init__ runs automatically
player1 = Player("SuperHero")
player2 = Player("NinjaWarrior", 150, 5)

player1.show_stats()
player2.show_stats()`
      },
      {
        title: "Instance Variables vs Class Variables",
        description: "Instance variables belong to each object (like everyone having their own name). Class variables are shared by ALL objects (like everyone in the same class wearing the same uniform)!",
        example: "Instance variable: Your own lunchbox. Class variable: The school you all attend!",
        codeExample: `class Student:
    # CLASS VARIABLE - shared by all students
    school_name = "Python Elementary"
    total_students = 0
    
    def __init__(self, name, age):
        # INSTANCE VARIABLES - unique to each student
        self.name = name
        self.age = age
        Student.total_students += 1

# Creating students
student1 = Student("Emma", 11)
student2 = Student("Alex", 12)

# Instance variables - different for each
print(student1.name)  # Emma
print(student2.name)  # Alex

# Class variable - SAME for all
print(student1.school_name)  # Python Elementary
print(student2.school_name)  # Python Elementary

# Accessing class variable directly
print(Student.school_name)
print(f"Total students: {Student.total_students}")`
      },
      {
        title: "Methods - Instance, Class, and Static",
        description: "There are 3 types of methods! Instance methods work with each object, class methods work with the class, and static methods are just utilities!",
        codeExample: `class MathHelper:
    pi = 3.14159
    
    # INSTANCE METHOD - uses self, works with object
    def __init__(self, number):
        self.number = number
    
    def square(self):
        return self.number * self.number
    
    # CLASS METHOD - uses cls, works with class
    @classmethod
    def get_pi(cls):
        return cls.pi
    
    # STATIC METHOD - doesn't use self or cls
    @staticmethod
    def add(a, b):
        return a + b

# Using instance method
obj = MathHelper(5)
print("Square:", obj.square())  # 25

# Using class method
print("Pi:", MathHelper.get_pi())  # 3.14159

# Using static method
print("Add:", MathHelper.add(10, 20))  # 30`
      },
      {
        title: "Single Inheritance",
        description: "Single inheritance is when a child class inherits from ONE parent class - like you inheriting traits from your mom!",
        example: "A smartphone inherits from a phone!",
        codeExample: `# Parent class
class Animal:
    def __init__(self, name):
        self.name = name
    
    def eat(self):
        print(f"{self.name} is eating! 🍽️")
    
    def sleep(self):
        print(f"{self.name} is sleeping! 💤")

# Child class inherits from Animal
class Cat(Animal):
    def meow(self):
        print(f"{self.name} says: Meow! 🐱")

# Using inherited class
kitty = Cat("Whiskers")
kitty.eat()    # Inherited from Animal
kitty.sleep()  # Inherited from Animal  
kitty.meow()   # Cat's own method`
      },
      {
        title: "Multiple Inheritance",
        description: "Multiple inheritance is when a child inherits from MULTIPLE parents - like getting traits from both mom AND dad!",
        example: "A flying car inherits from both Car and Aircraft!",
        codeExample: `# Parent class 1
class Flyer:
    def fly(self):
        print("Flying in the sky! ✈️")

# Parent class 2
class Swimmer:
    def swim(self):
        print("Swimming in water! 🏊")

# Child inherits from BOTH parents
class Duck(Flyer, Swimmer):
    def quack(self):
        print("Quack quack! 🦆")

# Duck can do everything!
duck = Duck()
duck.fly()    # From Flyer
duck.swim()   # From Swimmer
duck.quack()  # Own method

# Another example
class Phone:
    def call(self):
        print("Making a call... 📞")

class Camera:
    def take_photo(self):
        print("Taking photo! 📸")

class Smartphone(Phone, Camera):
    def browse_web(self):
        print("Browsing internet! 🌐")

iphone = Smartphone()
iphone.call()
iphone.take_photo()
iphone.browse_web()`
      },
      {
        title: "Multilevel Inheritance",
        description: "Multilevel inheritance is like a family tree - grandparent → parent → child! Each level inherits from the previous one.",
        example: "Great-grandparent → Grandparent → Parent → You!",
        codeExample: `# Level 1 - Grandparent
class Vehicle:
    def __init__(self):
        self.vehicle_type = "Transport"
    
    def general_use(self):
        print("General transportation")

# Level 2 - Parent (inherits from Vehicle)
class Car(Vehicle):
    def __init__(self):
        super().__init__()
        self.wheels = 4
    
    def drive(self):
        print("Driving on road! 🚗")

# Level 3 - Child (inherits from Car)
class ElectricCar(Car):
    def __init__(self):
        super().__init__()
        self.battery = "100%"
    
    def charge(self):
        print("Charging battery! ⚡")

# ElectricCar has everything from all levels!
tesla = ElectricCar()
tesla.general_use()  # From Vehicle
tesla.drive()        # From Car
tesla.charge()       # Own method
print("Wheels:", tesla.wheels)
print("Battery:", tesla.battery)`
      },
      {
        title: "Hierarchical Inheritance",
        description: "Hierarchical inheritance is when MULTIPLE children inherit from ONE parent - like multiple kids from the same parents!",
        example: "One parent class, many child classes - like different types of dogs!",
        codeExample: `# Parent class
class Shape:
    def __init__(self, color):
        self.color = color
    
    def show_color(self):
        print(f"Color: {self.color}")

# Child 1
class Circle(Shape):
    def __init__(self, color, radius):
        super().__init__(color)
        self.radius = radius
    
    def area(self):
        return 3.14 * self.radius ** 2

# Child 2
class Square(Shape):
    def __init__(self, color, side):
        super().__init__(color)
        self.side = side
    
    def area(self):
        return self.side ** 2

# Child 3
class Triangle(Shape):
    def __init__(self, color, base, height):
        super().__init__(color)
        self.base = base
        self.height = height
    
    def area(self):
        return 0.5 * self.base * self.height

# All inherit from Shape!
circle = Circle("Red", 5)
square = Square("Blue", 4)
triangle = Triangle("Green", 3, 6)

circle.show_color()
print("Circle area:", circle.area())

square.show_color()
print("Square area:", square.area())`
      },
      {
        title: "Hybrid Inheritance",
        description: "Hybrid inheritance combines multiple types of inheritance - like mixing different inheritance patterns together!",
        example: "A combination of multiple + multilevel inheritance!",
        codeExample: `# Hybrid = Mix of different inheritance types

# Base class
class Device:
    def turn_on(self):
        print("Device turning on...")

# Multiple inheritance branch
class Phone(Device):
    def call(self):
        print("Making call... 📞")

class Camera(Device):
    def take_photo(self):
        print("Photo taken! 📸")

# Combines multiple parents
class Smartphone(Phone, Camera):
    def browse(self):
        print("Browsing web... 🌐")

# Multilevel branch
class SmartWatch(Smartphone):
    def track_fitness(self):
        print("Tracking steps! 👟")

# SmartWatch has everything!
watch = SmartWatch()
watch.turn_on()      # From Device
watch.call()         # From Phone
watch.take_photo()   # From Camera
watch.browse()       # From Smartphone
watch.track_fitness()  # Own method`
      },
      {
        title: "Polymorphism - One Name, Many Forms",
        description: "Polymorphism means one thing can take many forms - like the word 'play' means different things: play piano, play soccer, play games!",
        example: "The same method name does different things in different classes!",
        codeExample: `# Polymorphism - same method, different behavior

class Dog:
    def speak(self):
        return "Woof! 🐕"

class Cat:
    def speak(self):
        return "Meow! 🐱"

class Cow:
    def speak(self):
        return "Moo! 🐄"

class Duck:
    def speak(self):
        return "Quack! 🦆"

# Same method name, different implementations!
animals = [Dog(), Cat(), Cow(), Duck()]

for animal in animals:
    print(animal.speak())  # Each speaks differently!

# Polymorphism with functions
def make_sound(animal):
    print(animal.speak())

make_sound(Dog())  # Woof!
make_sound(Cat())  # Meow!`
      },
      {
        title: "Method Overriding",
        description: "Method overriding is when a child class creates its own version of a parent's method - like doing a task your own way instead of your parent's way!",
        example: "Parent says 'clean your room', but you have your own method of cleaning!",
        codeExample: `# Method Overriding
class Animal:
    def __init__(self, name):
        self.name = name
    
    def sound(self):
        return "Some generic sound"
    
    def move(self):
        return "Moving..."

# Child overrides parent methods
class Dog(Animal):
    def sound(self):  # Overriding sound()
        return f"{self.name} says: Woof! 🐕"
    
    def move(self):   # Overriding move()
        return f"{self.name} runs on four legs!"

class Bird(Animal):
    def sound(self):  # Overriding sound()
        return f"{self.name} says: Tweet! 🐦"
    
    def move(self):   # Overriding move()
        return f"{self.name} flies in the sky!"

# Using overridden methods
dog = Dog("Buddy")
bird = Bird("Tweety")

print(dog.sound())   # Uses Dog's version
print(dog.move())    # Uses Dog's version

print(bird.sound())  # Uses Bird's version
print(bird.move())   # Uses Bird's version`
      },
      {
        title: "Encapsulation - Hiding Information",
        description: "Encapsulation means keeping some things private and some things public - like having secrets that only you know!",
        example: "Your diary is private (encapsulated), but your name is public!",
        codeExample: `# Encapsulation - Public, Protected, Private

class BankAccount:
    def __init__(self, name, balance):
        self.name = name              # Public
        self._account_id = "12345"    # Protected (single _)
        self.__password = "secret123"  # Private (double __)
    
    # Public method - anyone can use
    def deposit(self, amount):
        self.__balance += amount
        print(f"Deposited {amount}")
    
    # Protected method
    def _generate_statement(self):
        return "Statement generated"
    
    # Private method
    def __verify_password(self, pwd):
        return pwd == self.__password
    
    # Public method to access private
    def check_password(self, pwd):
        if self.__verify_password(pwd):
            print("Password correct! ✅")
        else:
            print("Wrong password! ❌")

account = BankAccount("Emma", 1000)

# Public - accessible
print(account.name)  # ✅ Works

# Protected - accessible but shouldn't use directly
print(account._account_id)  # ⚠️ Works but not recommended

# Private - NOT accessible
# print(account.__password)  # ❌ Error!

# Access private through public method
account.check_password("secret123")
account.check_password("wrong")`
      },
      {
        title: "Abstraction - Hiding Complexity",
        description: "Abstraction means hiding complex details and showing only what's necessary - like driving a car without knowing how the engine works!",
        example: "You use a TV remote without knowing the complex electronics inside!",
        codeExample: `from abc import ABC, abstractmethod

# Abstract class - can't create objects from it!
class Animal(ABC):
    @abstractmethod
    def sound(self):
        pass  # Must be implemented by children
    
    @abstractmethod
    def move(self):
        pass  # Must be implemented by children
    
    # Concrete method - all children get this
    def breathe(self):
        print("Breathing... 💨")

# Concrete classes must implement abstract methods
class Dog(Animal):
    def sound(self):
        print("Woof! 🐕")
    
    def move(self):
        print("Running on four legs!")

class Fish(Animal):
    def sound(self):
        print("Blub blub! 🐠")
    
    def move(self):
        print("Swimming in water!")

# Can't do: animal = Animal()  # Error!

# But can do:
dog = Dog()
dog.sound()    # Woof!
dog.move()     # Running
dog.breathe()  # Breathing...

fish = Fish()
fish.sound()   # Blub blub!
fish.move()    # Swimming
fish.breathe() # Breathing...`
      },
      {
        title: "super() - Calling Parent Methods",
        description: "super() lets you call methods from the parent class - like asking your parent for help!",
        example: "Like doing a task your parent's way and then adding your own twist!",
        codeExample: `# Using super() to call parent methods

class Parent:
    def __init__(self, name):
        self.name = name
        print("Parent constructor called")
    
    def show_info(self):
        print(f"Name: {self.name}")

class Child(Parent):
    def __init__(self, name, age):
        super().__init__(name)  # Call parent's __init__
        self.age = age
        print("Child constructor called")
    
    def show_info(self):
        super().show_info()  # Call parent's method
        print(f"Age: {self.age}")  # Add more info

child = Child("Emma", 11)
child.show_info()

# Another example
class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width
    
    def area(self):
        return self.length * self.width

class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)  # Use parent's __init__
    
    def perimeter(self):
        return 4 * self.length

square = Square(5)
print("Area:", square.area())      # From parent
print("Perimeter:", square.perimeter())  # Own method`
      }
    ]
  },
  {
    id: 11,
    title: "Advanced Python - Cool Tricks!",
    emoji: "⚡",
    topics: [
      {
        title: "Decorators - Wrap Functions with Magic",
        description: "Decorators add extra features to functions - like adding sprinkles to ice cream!",
        codeExample: `# Simple decorator
def make_exciting(func):
    def wrapper():
        print("✨" * 10)
        func()
        print("✨" * 10)
    return wrapper

@make_exciting
def say_hello():
    print("Hello, World!")

say_hello()

# Another decorator example
def repeat_twice(func):
    def wrapper():
        func()
        func()
    return wrapper

@repeat_twice
def celebrate():
    print("Hooray! 🎉")

celebrate()`
      },
      {
        title: "Generators - Save Memory",
        description: "Generators create values one at a time - like getting candies one by one instead of carrying the whole bag!",
        codeExample: `# Generator function
def count_up_to(n):
    count = 1
    while count <= n:
        yield count
        count += 1

# Using generator
for num in count_up_to(5):
    print(num)

# Generator expression
squares = (x * x for x in range(1, 6))
for square in squares:
    print(square)`
      },
      {
        title: "Working with Dates and Time",
        description: "Python can work with dates and times - know what day it is, count days, and more!",
        codeExample: `# Working with datetime
from datetime import datetime, timedelta

# Current date and time
now = datetime.now()
print("Today:", now.strftime("%B %d, %Y"))
print("Time:", now.strftime("%H:%M:%S"))

# Calculate future date
tomorrow = now + timedelta(days=1)
print("Tomorrow:", tomorrow.strftime("%B %d, %Y"))

# Your birthday countdown
birthday = datetime(2024, 12, 25)
days_until = (birthday - now).days
print(f"Days until birthday: {days_until}")`
      },
      {
        title: "Random Numbers and Choices",
        description: "Create random things - perfect for games, dice rolls, and surprises!",
        codeExample: `import random

# Random integer
dice_roll = random.randint(1, 6)
print("Dice roll:", dice_roll, "🎲")

# Random choice
animals = ["🐶", "🐱", "🐭", "🐹", "🐰"]
pet = random.choice(animals)
print("Your random pet:", pet)

# Shuffle list
deck = ["A", "K", "Q", "J", "10", "9"]
random.shuffle(deck)
print("Shuffled:", deck)

# Random float between 0 and 1
random_decimal = random.random()
print("Random decimal:", random_decimal)`
      },
      {
        title: "Iterators - Step Through Items",
        description: "Iterators let you go through items one by one - like flipping through pages of a book!",
        example: "An iterator is like a bookmark that helps you keep track of where you are in a list!",
        codeExample: `# Creating an iterator
my_list = [1, 2, 3, 4, 5]
my_iter = iter(my_list)

# Getting items one by one
print(next(my_iter))  # 1
print(next(my_iter))  # 2
print(next(my_iter))  # 3

# Creating custom iterator
class Counter:
    def __init__(self, max):
        self.max = max
        self.current = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current < self.max:
            self.current += 1
            return self.current
        raise StopIteration

# Using custom iterator
counter = Counter(5)
for num in counter:
    print(num)  # 1, 2, 3, 4, 5`
      },
      {
        title: "Closures - Functions Inside Functions",
        description: "A closure is when a function remembers variables from outside its scope - like a function with memory!",
        example: "Like a secret agent that remembers their secret code even after the mission!",
        codeExample: `# Closure example
def make_multiplier(n):
    def multiplier(x):
        return x * n  # Remembers 'n' from outer function!
    return multiplier

# Creating closures
times_3 = make_multiplier(3)
times_5 = make_multiplier(5)

print(times_3(10))  # 30 (10 * 3)
print(times_5(10))  # 50 (10 * 5)

# Another example - counter
def create_counter():
    count = 0
    def increment():
        nonlocal count  # Access outer variable
        count += 1
        return count
    return increment

counter1 = create_counter()
counter2 = create_counter()

print(counter1())  # 1
print(counter1())  # 2
print(counter2())  # 1 (separate counter!)`
      },
      {
        title: "Shallow Copy vs Deep Copy",
        description: "Shallow copy copies the surface, deep copy copies everything including nested items - like copying a folder vs copying everything inside it too!",
        example: "Shallow copy: Copy a toy box but toys inside are still shared. Deep copy: Copy the box AND make new copies of all toys!",
        codeExample: `import copy

# Original list with nested list
original = [1, 2, [3, 4], 5]

# SHALLOW COPY - copies outer list only
shallow = copy.copy(original)
shallow = original.copy()  # or use this

# Modify nested list
original[2][0] = 999

print("Original:", original)  # [1, 2, [999, 4], 5]
print("Shallow:", shallow)    # [1, 2, [999, 4], 5] - CHANGED!

# DEEP COPY - copies everything
original2 = [1, 2, [3, 4], 5]
deep = copy.deepcopy(original2)

# Modify nested list
original2[2][0] = 999

print("Original2:", original2)  # [1, 2, [999, 4], 5]
print("Deep:", deep)            # [1, 2, [3, 4], 5] - NOT changed!

# With dictionaries
dict_original = {"a": 1, "b": {"c": 2}}
dict_shallow = dict_original.copy()
dict_deep = copy.deepcopy(dict_original)

dict_original["b"]["c"] = 999
print("Shallow dict:", dict_shallow)  # Changed!
print("Deep dict:", dict_deep)        # Not changed!`
      },
      {
        title: "copy Module - Making Copies",
        description: "The copy module helps you make copies of objects - shallow or deep!",
        codeExample: `import copy

# Simple copy
list1 = [1, 2, 3]
list2 = copy.copy(list1)
list2.append(4)
print("List1:", list1)  # [1, 2, 3]
print("List2:", list2)  # [1, 2, 3, 4]

# Deep copy with nested structures
class Person:
    def __init__(self, name, friends):
        self.name = name
        self.friends = friends

person1 = Person("Emma", ["Alex", "Sam"])
person2 = copy.deepcopy(person1)

person1.friends.append("Jake")
print("Person1 friends:", person1.friends)  # ['Alex', 'Sam', 'Jake']
print("Person2 friends:", person2.friends)  # ['Alex', 'Sam']`
      },
      {
        title: "collections Module - Special Data Structures",
        description: "The collections module has super useful data structures - like upgraded versions of lists and dictionaries!",
        codeExample: `from collections import Counter, defaultdict, deque, namedtuple

# COUNTER - counts things automatically!
colors = ["red", "blue", "red", "green", "blue", "red"]
color_count = Counter(colors)
print(color_count)  # Counter({'red': 3, 'blue': 2, 'green': 1})
print(color_count['red'])  # 3

# DEFAULTDICT - never get KeyError!
scores = defaultdict(int)  # default value is 0
scores['Emma'] += 10
scores['Alex'] += 5
print(scores)  # defaultdict(<class 'int'>, {'Emma': 10, 'Alex': 5})

# DEQUE - fast add/remove from both ends!
queue = deque([1, 2, 3])
queue.append(4)      # Add to right
queue.appendleft(0)  # Add to left
print(queue)  # deque([0, 1, 2, 3, 4])
queue.pop()          # Remove from right
queue.popleft()      # Remove from left
print(queue)  # deque([1, 2, 3])

# NAMEDTUPLE - like a lightweight class
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)
print(p.x, p.y)  # 10 20
print(p[0], p[1])  # 10 20`
      },
      {
        title: "itertools Module - Iterator Tools",
        description: "itertools has amazing tools for working with iterators - create combinations, permutations, and more!",
        example: "Like a toolkit for generating all possible combinations - perfect for games and puzzles!",
        codeExample: `from itertools import count, cycle, repeat, combinations, permutations, chain

# COUNT - infinite counter
# for i in count(1, 2):  # Starts at 1, step by 2
#     if i > 10: break
#     print(i)  # 1, 3, 5, 7, 9

# CYCLE - repeat forever
colors = cycle(['red', 'blue', 'green'])
for i, color in enumerate(colors):
    if i >= 6: break
    print(color)  # red, blue, green, red, blue, green

# REPEAT - repeat value
for x in repeat('Hello', 3):
    print(x)  # Hello (3 times)

# COMBINATIONS - all combinations
letters = ['A', 'B', 'C']
combos = combinations(letters, 2)
print(list(combos))  # [('A', 'B'), ('A', 'C'), ('B', 'C')]

# PERMUTATIONS - all arrangements
perms = permutations(letters, 2)
print(list(perms))  # [('A', 'B'), ('A', 'C'), ('B', 'A'), ...]

# CHAIN - combine iterators
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = chain(list1, list2)
print(list(combined))  # [1, 2, 3, 4, 5, 6]`
      },
      {
        title: "datetime Module - Complete Guide",
        description: "Master dates and times - create dates, format them, calculate differences, and work with timezones!",
        codeExample: `from datetime import datetime, date, time, timedelta

# Current date and time
now = datetime.now()
print("Now:", now)

# Create specific date
birthday = datetime(2024, 12, 25, 10, 30)  # Dec 25, 2024, 10:30 AM
print("Birthday:", birthday)

# Date only
today = date.today()
print("Today:", today)

# Time only
current_time = time(14, 30, 0)  # 2:30 PM
print("Time:", current_time)

# Formatting dates
formatted = now.strftime("%B %d, %Y at %I:%M %p")
print(formatted)  # "December 29, 2025 at 02:30 PM"

# Parsing dates
date_str = "2024-12-25"
parsed = datetime.strptime(date_str, "%Y-%m-%d")
print("Parsed:", parsed)

# Date arithmetic
tomorrow = today + timedelta(days=1)
next_week = today + timedelta(weeks=1)
next_year = today + timedelta(days=365)

# Difference between dates
diff = birthday - now
print(f"Days until birthday: {diff.days}")

# Day of week
print("Day of week:", today.strftime("%A"))  # Monday, Tuesday, etc.`
      },
      {
        title: "math Module - Complete Math Functions",
        description: "The math module has TONS of math functions - from basic to advanced!",
        codeExample: `import math

# Constants
print("Pi:", math.pi)
print("Euler's number:", math.e)
print("Infinity:", math.inf)

# Basic functions
print("Square root of 16:", math.sqrt(16))
print("Absolute value:", math.fabs(-5.5))
print("Power:", math.pow(2, 3))

# Rounding
print("Ceiling of 4.3:", math.ceil(4.3))    # 5
print("Floor of 4.7:", math.floor(4.7))      # 4
print("Truncate:", math.trunc(4.9))         # 4

# Trigonometry (angles in radians)
angle_deg = 45
angle_rad = math.radians(angle_deg)
print(f"Sin of {angle_deg}°:", math.sin(angle_rad))
print(f"Cos of {angle_deg}°:", math.cos(angle_rad))
print(f"Tan of {angle_deg}°:", math.tan(angle_rad))

# Logarithms
print("Log base 10:", math.log10(100))  # 2.0
print("Natural log:", math.log(math.e))  # 1.0
print("Log base 2:", math.log2(8))       # 3.0

# Factorial
print("5 factorial:", math.factorial(5))  # 120

# GCD (Greatest Common Divisor)
print("GCD of 12 and 8:", math.gcd(12, 8))  # 4`
      }
    ]
  },
  {
    id: 12,
    title: "Python Standard Library",
    emoji: "🔨",
    topics: [
      {
        title: "OS Module - Control Your Computer",
        description: "The OS module helps you interact with your computer - create folders, check files, and more!",
        codeExample: `import os

# Get current directory
current = os.getcwd()
print("Current folder:", current)

# List files in directory
files = os.listdir('.')
print("Files here:", files)

# Check if file exists
if os.path.exists('my_file.txt'):
    print("File exists! ✅")
else:
    print("File not found! ❌")

# Create a new directory
# os.mkdir('my_new_folder')
print("Folder created!")`
      },
      {
        title: "Regular Expressions - Pattern Matching",
        description: "Regular expressions (regex) help you find patterns in text - like finding all phone numbers in a document!",
        codeExample: `import re

# Find all numbers in text
text = "I have 3 apples and 5 oranges"
numbers = re.findall(r'\\d+', text)
print("Numbers found:", numbers)

# Check if email is valid
email = "student@school.com"
if re.match(r'^[\\w\\.-]+@[\\w\\.-]+\\.\\w+$', email):
    print("Valid email! ✉️")

# Replace words
sentence = "I love cats and cats love me"
new_sentence = re.sub(r'cats', 'dogs', sentence)
print(new_sentence)`
      },
      {
        title: "Math Module - Advanced Math",
        description: "The math module has lots of cool math functions - square roots, trigonometry, constants like pi!",
        codeExample: `import math

# Constants
print("Pi:", math.pi)
print("Euler's number:", math.e)

# Calculations
print("Square root of 16:", math.sqrt(16))
print("5 to the power of 3:", math.pow(5, 3))
print("Ceiling of 4.3:", math.ceil(4.3))
print("Floor of 4.7:", math.floor(4.7))

# Trigonometry
angle = 45
radians = math.radians(angle)
print(f"Sin of {angle}°:", math.sin(radians))`
      },
      {
        title: "sys Module - System Functions",
        description: "The sys module lets you interact with Python itself - check version, command line arguments, and exit programs!",
        example: "Like checking what version of Python you're using or passing arguments to your program!",
        codeExample: `import sys

# Python version
print("Python version:", sys.version)
print("Version info:", sys.version_info)

# Command line arguments
# When you run: python script.py arg1 arg2
print("Script name:", sys.argv[0])
# print("Arguments:", sys.argv[1:])

# Platform information
print("Operating system:", sys.platform)

# Maximum integer size
print("Max int:", sys.maxsize)

# Exit program
# sys.exit("Exiting program!")

# Path where Python looks for modules
print("Module search paths:", sys.path[:3])`
      },
      {
        title: "argparse Module - Command Line Arguments",
        description: "argparse helps you create programs that accept arguments from command line - like professional programs!",
        example: "Like when you run 'python game.py --level 5 --difficulty hard'!",
        codeExample: `import argparse

# Create parser
parser = argparse.ArgumentParser(description='My Cool Program')

# Add arguments
parser.add_argument('name', help='Your name')
parser.add_argument('--age', type=int, help='Your age')
parser.add_argument('--verbose', action='store_true', 
                   help='Print detailed output')

# Parse arguments (when run from command line)
# args = parser.parse_args()
# 
# print(f"Hello {args.name}!")
# if args.age:
#     print(f"You are {args.age} years old")
# if args.verbose:
#     print("Verbose mode enabled!")

# Example usage:
# python script.py Emma --age 11 --verbose`
      },
      {
        title: "logging Module - Track What Happens",
        description: "The logging module helps you track what your program does - like keeping a diary of everything that happens!",
        example: "Instead of using print(), use logging to track errors, warnings, and important events!",
        codeExample: `import logging

# Basic configuration
logging.basicConfig(level=logging.DEBUG,
                   format='%(levelname)s: %(message)s')

# Different log levels
logging.debug("This is debug info (for developers)")
logging.info("Program started successfully ℹ️")
logging.warning("Warning: Low on memory! ⚠️")
logging.error("Error: File not found! ❌")
logging.critical("Critical: System crash! 🔥")

# Logging to file
logging.basicConfig(
    filename='app.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

logging.info("This goes to app.log file!")

# Example usage
def divide(a, b):
    try:
        result = a / b
        logging.info(f"Division successful: {a}/{b} = {result}")
        return result
    except ZeroDivisionError:
        logging.error("Cannot divide by zero!")
        return None`
      },
      {
        title: "subprocess Module - Run Other Programs",
        description: "subprocess lets your Python program run other programs - like opening a calculator or running commands!",
        example: "Like a conductor that can tell other programs what to do!",
        codeExample: `import subprocess

# Run a simple command
# result = subprocess.run(['echo', 'Hello World'], 
#                        capture_output=True, text=True)
# print(result.stdout)

# Run Python code
# subprocess.run(['python', '--version'])

# Get output from command
# result = subprocess.run(['ls'], 
#                        capture_output=True, text=True)
# print("Files:", result.stdout)

# Run with shell
# subprocess.run('echo Hello from shell', shell=True)

# Check if command succeeded
# result = subprocess.run(['python', '-c', 'print(2+2)'],
#                        capture_output=True, text=True)
# if result.returncode == 0:
#     print("Success! Output:", result.stdout)

# Example: Open calculator (Windows)
# subprocess.run('calc', shell=True)`
      },
      {
        title: "time Module - Measure Time",
        description: "The time module helps you work with time - pause programs, measure how long code takes, and more!",
        example: "Like having a stopwatch to see how fast your code runs!",
        codeExample: `import time

# Current time (seconds since 1970)
current_time = time.time()
print("Current timestamp:", current_time)

# Pause program
print("Waiting 2 seconds...")
time.sleep(2)  # Sleep for 2 seconds
print("Done waiting! ⏰")

# Measure code execution time
start = time.time()

# Some code to measure
total = sum(range(1000000))

end = time.time()
print(f"Code took {end - start:.4f} seconds")

# Get readable time
readable = time.ctime()
print("Current time:", readable)

# Countdown timer
for i in range(5, 0, -1):
    print(f"Countdown: {i}")
    time.sleep(1)
print("Blast off! 🚀")`
      }
    ]
  },
  {
    id: 13,
    title: "Virtual Environment & Packages",
    emoji: "📦",
    topics: [
      {
        title: "What is pip?",
        description: "pip is like an app store for Python! It helps you download and install cool Python packages.",
        example: "Just like downloading apps on your phone, pip downloads Python libraries!",
        codeExample: `# Install a package (run in terminal)
# pip install requests

# Install specific version
# pip install pandas==1.5.0

# Uninstall a package
# pip uninstall requests

# List all installed packages
# pip list

# Show package info
# pip show numpy`
      },
      {
        title: "Using requirements.txt",
        description: "requirements.txt is a shopping list of all packages your project needs!",
        codeExample: `# Create requirements.txt with:
requests==2.28.0
pandas==1.5.0
numpy==1.23.0

# Install all packages from requirements.txt:
# pip install -r requirements.txt

# Create requirements.txt from current environment:
# pip freeze > requirements.txt`
      },
      {
        title: "Virtual Environments",
        description: "Virtual environments are like separate toy boxes for different projects - keeps everything organized!",
        example: "Like having one box for LEGO and another for action figures!",
        codeExample: `# Create virtual environment (terminal):
# python -m venv myenv

# Activate it (Windows):
# myenv\\Scripts\\activate

# Activate it (Mac/Linux):
# source myenv/bin/activate

# Now install packages:
# pip install requests

# Deactivate when done:
# deactivate`
      },
      {
        title: "pip freeze - Save Your Packages",
        description: "pip freeze shows all installed packages and their versions - like making a shopping list of everything you have!",
        example: "Save your package list so you can recreate the same environment on another computer!",
        codeExample: `# Show all installed packages
# pip freeze

# Output example:
# requests==2.28.0
# pandas==1.5.0
# numpy==1.23.0

# Save to requirements.txt
# pip freeze > requirements.txt

# Now anyone can install the same packages:
# pip install -r requirements.txt

# Uninstall all packages
# pip freeze > to_uninstall.txt
# pip uninstall -r to_uninstall.txt -y`
      },
      {
        title: "Poetry - Modern Package Manager",
        description: "Poetry is a modern tool that manages packages AND virtual environments together - easier than pip!",
        example: "Like having a smart assistant that handles all your Python packages and dependencies!",
        codeExample: `# Install Poetry first
# curl -sSL https://install.python-poetry.org | python3 -

# Create new project
# poetry new my-project

# Add packages
# poetry add requests
# poetry add pandas numpy

# Install all dependencies
# poetry install

# Show installed packages
# poetry show

# Update packages
# poetry update

# Run Python in Poetry environment
# poetry run python script.py

# pyproject.toml example:
# [tool.poetry.dependencies]
# python = "^3.9"
# requests = "^2.28.0"
# pandas = "^1.5.0"`
      },
      {
        title: "Conda - Package & Environment Manager",
        description: "Conda manages both packages and environments, especially good for data science!",
        example: "Popular in data science - comes with Anaconda distribution!",
        codeExample: `# Create conda environment
# conda create --name myenv python=3.9

# Activate environment
# conda activate myenv

# Install packages
# conda install numpy pandas matplotlib

# Install from conda-forge channel
# conda install -c conda-forge requests

# List environments
# conda env list

# List packages in environment
# conda list

# Export environment
# conda env export > environment.yml

# Create from environment file
# conda env create -f environment.yml

# Remove environment
# conda env remove --name myenv

# Deactivate
# conda deactivate`
      }
    ]
  },
  {
    id: 14,
    title: "Database Connectivity",
    emoji: "💾",
    topics: [
      {
        title: "What is a Database?",
        description: "A database is like a super organized filing cabinet that stores lots of information!",
        example: "Like your school's system that keeps track of all students, grades, and classes!",
        codeExample: `# Python can talk to databases!
# Databases help you:
# - Store information permanently
# - Organize data in tables
# - Search and find information quickly
# - Update and delete data

# Common databases:
# SQLite - Simple, built into Python
# MySQL - Popular, powerful
# PostgreSQL - Advanced features`
      },
      {
        title: "Using SQLite - Built-in Database",
        description: "SQLite comes with Python! Perfect for learning and small projects.",
        codeExample: `import sqlite3

# Create/connect to database
conn = sqlite3.connect('my_games.db')
cursor = conn.cursor()

# Create a table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS games (
        id INTEGER PRIMARY KEY,
        name TEXT,
        score INTEGER
    )
''')

# Insert data
cursor.execute("INSERT INTO games (name, score) VALUES (?, ?)",
               ("Minecraft", 100))
cursor.execute("INSERT INTO games (name, score) VALUES (?, ?)",
               ("Roblox", 95))

# Save changes
conn.commit()

# Read data
cursor.execute("SELECT * FROM games")
games = cursor.fetchall()
for game in games:
    print(f"Game: {game[1]}, Score: {game[2]}")

# Close connection
conn.close()`
      },
      {
        title: "CRUD Operations",
        description: "CRUD means Create, Read, Update, Delete - the four main things you do with data!",
        codeExample: `import sqlite3

conn = sqlite3.connect('students.db')
cursor = conn.cursor()

# CREATE table
cursor.execute('''CREATE TABLE IF NOT EXISTS students
                 (id INTEGER PRIMARY KEY, 
                  name TEXT, 
                  age INTEGER)''')

# CREATE - Add new student
cursor.execute("INSERT INTO students (name, age) VALUES (?, ?)",
               ("Emma", 11))

# READ - Get all students
cursor.execute("SELECT * FROM students")
print("All students:", cursor.fetchall())

# UPDATE - Change student info
cursor.execute("UPDATE students SET age = ? WHERE name = ?",
               (12, "Emma"))

# DELETE - Remove student
cursor.execute("DELETE FROM students WHERE name = ?", 
               ("Emma",))

conn.commit()
conn.close()
print("Database operations complete! 💾")`
      },
      {
        title: "Python with MySQL",
        description: "MySQL is a popular database used by many websites! You need to install mysql-connector-python to use it.",
        example: "Many big websites like Facebook and YouTube use MySQL!",
        codeExample: `# First install: pip install mysql-connector-python

import mysql.connector

# Connect to MySQL server
conn = mysql.connector.connect(
    host="localhost",
    user="your_username",
    password="your_password",
    database="school_db"
)

cursor = conn.cursor()

# Create table
cursor.execute("""
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    grade INT,
    subject VARCHAR(50)
)
""")

# Insert data
sql = "INSERT INTO students (name, grade, subject) VALUES (%s, %s, %s)"
values = ("Emma", 11, "Math")
cursor.execute(sql, values)

# Insert multiple rows
students = [
    ("Alex", 12, "Science"),
    ("Sam", 11, "English"),
    ("Jake", 12, "Math")
]
cursor.executemany(sql, students)
conn.commit()

# Read data
cursor.execute("SELECT * FROM students")
results = cursor.fetchall()
for student in results:
    print(f"ID: {student[0]}, Name: {student[1]}, Grade: {student[2]}")

# Update data
update_sql = "UPDATE students SET grade = %s WHERE name = %s"
cursor.execute(update_sql, (12, "Emma"))
conn.commit()

# Delete data
delete_sql = "DELETE FROM students WHERE name = %s"
cursor.execute(delete_sql, ("Jake",))
conn.commit()

# Close connection
cursor.close()
conn.close()
print("MySQL operations complete! 🗄️")`
      },
      {
        title: "Python with PostgreSQL",
        description: "PostgreSQL is a powerful, advanced database! Install psycopg2 to use it with Python.",
        example: "Used by Instagram, Spotify, and many large companies!",
        codeExample: `# First install: pip install psycopg2-binary

import psycopg2

# Connect to PostgreSQL
conn = psycopg2.connect(
    host="localhost",
    database="school_db",
    user="your_username",
    password="your_password"
)

cursor = conn.cursor()

# Create table
cursor.execute("""
CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INTEGER,
    email VARCHAR(100)
)
""")

# Insert data
cursor.execute(
    "INSERT INTO students (name, age, email) VALUES (%s, %s, %s)",
    ("Emma", 11, "emma@school.com")
)

# Insert multiple
students = [
    ("Alex", 12, "alex@school.com"),
    ("Sam", 11, "sam@school.com")
]
cursor.executemany(
    "INSERT INTO students (name, age, email) VALUES (%s, %s, %s)",
    students
)
conn.commit()

# Read with WHERE clause
cursor.execute("SELECT * FROM students WHERE age >= %s", (11,))
results = cursor.fetchall()
for student in results:
    print(f"Name: {student[1]}, Age: {student[2]}, Email: {student[3]}")

# Update
cursor.execute(
    "UPDATE students SET age = %s WHERE name = %s",
    (12, "Emma")
)
conn.commit()

# Delete
cursor.execute("DELETE FROM students WHERE name = %s", ("Sam",))
conn.commit()

# Close
cursor.close()
conn.close()
print("PostgreSQL operations complete! 🐘")`
      },
      {
        title: "What is DBMS?",
        description: "DBMS (Database Management System) is software that helps store, retrieve, and manage data in databases!",
        example: "Like a librarian that helps organize and find books in a huge library!",
        codeExample: `# What is DBMS (Database Management System)?

# DBMS helps you:
# 1. Store data in organized tables
# 2. Retrieve data quickly with queries
# 3. Update and delete data safely
# 4. Handle multiple users at once
# 5. Keep data secure and backed up

# Types of DBMS:

# 1. Relational DBMS (RDBMS)
#    - MySQL, PostgreSQL, SQLite
#    - Data in tables with relationships
#    - Use SQL language

# 2. NoSQL DBMS
#    - MongoDB, Redis, Cassandra
#    - More flexible structure
#    - Good for big data

# 3. In-Memory DBMS
#    - Redis, Memcached
#    - Super fast, data in RAM

# Why use DBMS?
# ✅ Data integrity - keeps data accurate
# ✅ Security - controls who can access data
# ✅ Backup & Recovery - don't lose data
# ✅ Concurrent access - multiple users at once
# ✅ Efficient - fast searches and updates

# Example: School DBMS
# Tables: Students, Teachers, Classes, Grades
# Each table connected by relationships!`
      }
    ]
  }
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 border-b transition-colors ${
        isDarkMode 
          ? 'bg-gray-800/80 backdrop-blur-lg border-gray-700' 
          : 'bg-white/80 backdrop-blur-lg border-purple-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className={`text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Python for Kids! 🐍
                </h1>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Learn Python the Fun Way!
                </p>
              </div>
            </div>
            <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {selectedModule === null ? (
          <>
            {/* Hero Section */}
            <div className={`text-center mb-12 p-8 rounded-3xl ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50' 
                : 'bg-gradient-to-r from-purple-100 to-pink-100'
            }`}>
              <div className="flex justify-center mb-4">
                <Sparkles className={`w-16 h-16 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
              </div>
              <h2 className={`text-4xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Welcome to Python Learning! 🎉
              </h2>
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                14 Awesome Modules • Easy Examples • Fun Code • Real-World Projects
              </p>
            </div>

            {/* Module Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  isDarkMode={isDarkMode}
                  onClick={() => setSelectedModule(module.id)}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Back Button */}
            <button
              onClick={() => setSelectedModule(null)}
              className={`mb-6 px-6 py-3 rounded-xl transition-all ${
                isDarkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              ← Back to All Modules
            </button>

            {/* Module Content */}
            {modules
              .filter((m) => m.id === selectedModule)
              .map((module) => (
                <div key={module.id}>
                  {/* Module Header */}
                  <div className={`p-8 rounded-3xl mb-8 ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50'
                      : 'bg-gradient-to-r from-purple-100 to-pink-100'
                  }`}>
                    <div className="text-6xl mb-4">{module.emoji}</div>
                    <h2 className={`text-4xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Module {module.id}: {module.title}
                    </h2>
                    <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {module.topics.length} Topics to Master
                    </p>
                  </div>

                  {/* Topics */}
                  <div className="space-y-8">
                    {module.topics.map((topic, index) => (
                      <div
                        key={index}
                        className={`p-6 rounded-2xl ${
                          isDarkMode
                            ? 'bg-gray-800 border border-gray-700'
                            : 'bg-white border border-purple-200'
                        }`}
                      >
                        <h3 className={`text-2xl mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {topic.title}
                        </h3>
                        <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {topic.description}
                        </p>
                        {topic.example && (
                          <div className={`p-4 rounded-xl mb-4 ${
                            isDarkMode ? 'bg-blue-900/30 border-l-4 border-blue-500' : 'bg-blue-50 border-l-4 border-blue-400'
                          }`}>
                            <p className={`${isDarkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                              💡 <strong>Real-world example:</strong> {topic.example}
                            </p>
                          </div>
                        )}
                        {topic.codeExample && (
                          <CodeBlock code={topic.codeExample} isDarkMode={isDarkMode} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className={`mt-16 py-8 border-t ${
        isDarkMode ? 'border-gray-800 bg-gray-900' : 'border-purple-200 bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Keep coding and have fun! 🚀 Made with 💜 for young Python learners
          </p>
        </div>
      </footer>
    </div>
  );
}
