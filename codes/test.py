# def make_testdict():
#     testdict = {
#         'name': 'Lee',
#         'age': 20,
#         'sayhello': lambda : print(f'my name is {testdict['name']}')
#     }
#     return testdict

# testdict = make_testdict()
# print(testdict)
# testdict['sayhello']()

def make_d():
    d = {"r": [*range(10)], "r2": range(10, 20), "f": lambda: d["r"].extend(d["r2"])}
    return d

the_d = make_d()
the_d["f"]()
the_d