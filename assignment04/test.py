def noOfEvenDaysInAYearNaive(yearsFrom, yearsTo):
    days = 0
    years = (yearsTo - yearsFrom) + 1
    # Naive Solution O(n^3)
    for year in range(years):
        for month in range(1,13):
            for day in range(1,31):
                if(day % 2 == 0):
                    days += 1
    return days

def noOfEvenDaysInAYearOptimized(yearsFrom, yearsTo):
    evenDaysInAMonth = 0
    years = (yearsTo - yearsFrom) + 1
    # Optimized Solution O(n)
    for day in range(1,31):
        if(day % 2 == 0):
            evenDaysInAMonth += 1
    totalEvenDaysInAYear = evenDaysInAMonth * 12;
    return totalEvenDaysInAYear * years

# Naive Brute Force Solution
print(noOfEvenDaysInAYearNaive(2022, 3190))
# Optimized Solution
# print(noOfEvenDaysInAYearOptimized(2022, 3190))
