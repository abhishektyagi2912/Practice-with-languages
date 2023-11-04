#include<iostream>
using namespace std;

    int main(){
    int marks[]={10,20,30,40};
    marks[0]=100;
    cout<<"Marks of students are: "<<marks[0]<<endl;

    int i=0;

    while (i<4)
    {
        cout<<"Marks of students are: "<<i<<" is "<<marks[i]<<endl;
        i++;
    }

    // pointers to array

    int* p =marks;
    cout<<*(p++)<<endl;
    cout<<*p<<endl;  //*p is the value of the next element in the array because p is pointing to the first element and we are incrementing it by 1
    // cout<<"Marks of students are: "<<*p<<endl;
    // cout<<"Marks of students are: "<<*(p+1)<<endl;
    // cout<<"Marks of students are: "<<*(p+2)<<endl;

    return 0;
}
