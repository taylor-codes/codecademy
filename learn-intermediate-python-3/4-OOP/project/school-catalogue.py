class School:
    def __init__(self, name, level, numberOfStudents):
        self.name = name
        self.level = level
        self.numberOfStudents = numberOfStudents

    def get_name(self):
        return self.name
    
    def get_level(self):
        return self.level
    
    def get_numberOfStudents(self):
        return self.numberOfStudents

    def set_numberOfStudents(self, numberOfStudents):
        self.numberOfStudents = numberOfStudents

    def __repr__(self):
        return "A {level} school named {name} with {numberOfStudents} students. ".format(level = self.level, name = self.name, numberOfStudents = self.numberOfStudents)

a = School('School A', 'high', 101)
print(a)
# a.set_numberOfStudents(5000)
# print(a)

class PrimarySchool(School):
    def __init__(self, name, numberOfStudents, pickupPolicy):
        super().__init__(name, 'primary', numberOfStudents)
        self.pickupPolicy = pickupPolicy

    def __repr__(self):
        return super().__repr__() + "The pickup policy is {pickupPolicy}".format(pickupPolicy = self.pickupPolicy)

    def get_pickupPolicy(self):
        return self.pickupPolicy

b = PrimarySchool('School B', 1000, 'NO')
print(b)

class HighSchool(School):
    def __init__(self, name, numberOfStudents, sportsTeams = []):
        super().__init__(name, 'high', numberOfStudents)
        self.sportsTeams = sportsTeams
    
    def get_sportsTeams(self):
        return self.sportsTeams

    def __repr__(self):
        return super().__repr__() + "Sports Teams: {sportsTeamsList}".format(sportsTeamsList = self.sportsTeams)

mvhs = HighSchool("MVHS", 108, ['Football', 'Baseball'])
print(mvhs)