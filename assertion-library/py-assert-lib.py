def tests(cases: list, code: object) -> None:
    for case in cases:
        if code(case['input']) == case['expected']:
            print("Case: PASS")
        else:
            print("Case: FAIL")