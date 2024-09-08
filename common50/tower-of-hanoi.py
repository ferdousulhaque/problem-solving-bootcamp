def tower_of_hanoi(n, source, target, auxiliary):
    # Base case: Only one disk
    if n == 1:
        print(f"Move disk 1 from {source} to {target}")
        return
    
    # Step 1: Move n-1 disks from source to auxiliary using target
    tower_of_hanoi(n-1, source, auxiliary, target)
    
    # Step 2: Move the nth disk from source to target
    print(f"Move disk {n} from {source} to {target}")
    
    # Step 3: Move n-1 disks from auxiliary to target using source
    tower_of_hanoi(n-1, auxiliary, target, source)

# Test the function with 3 disks
n = 3
tower_of_hanoi(n, 'A', 'C', 'B')
