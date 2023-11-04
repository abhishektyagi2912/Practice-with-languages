#include<iostream>
using namespace std;

    int main(){
    // int marks[4]={10,20,30,40}; //compiler is intelligent enough to know that the array is of size 4
    int marks[]={10,20,30,40}; 
    cout<<"Marks of students are: "<<marks[0]<<endl;
    cout<<"Marks of students are: "<<marks[1]<<endl;
    cout<<"Marks of students are: "<<marks[2]<<endl;
    cout<<"Marks of students are: "<<marks[3]<<endl;
    return 0;
}