//what is structure ?
//structures are a way to group data together to form a single unit. and it is user defined data type.
//datatype is a collection of values like a list of values

//typedef mean that which we use first as struct employee and then we use it as employee    
//typedef is used to define a new name for an existing type
#include<iostream>
using namespace std;

// typedef struct student{
//     int rollno;
//     float marks;
//     char favchar;
// }ep; //ep is a new name for struct student
struct student{
    int rollno;
    float marks;
    char favchar;
};

    int main(){
    student s1;
    s1.rollno=1;
    s1.marks=90.5;
    s1.favchar='a';

    student s2;
    s2.rollno=2;
    s2.marks=80.5;
    s2.favchar='b';

    cout<<"Rollno of student 1 is: "<<s1.rollno<<endl;
    cout<<"Marks of student 1 is: "<<s1.marks<<endl;
    cout<<"Favourite character of student 1 is: "<<s1.favchar<<endl;

    
    return 0;
}