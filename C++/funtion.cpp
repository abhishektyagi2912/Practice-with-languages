#include<iostream>
using namespace std;
    // int sum(int a,int b)
    // {
    //     return a+b;
    // }

//Function Prototype means that the function is defined somewhere else
//type function-name(parameter-list)

int sum(int a,int b);
//a and b are formal parameters
//it takes a actual parameter and return a value.

void g();
    int main(){
        int a,b;
        // here a and b are actual parameters
        cout<<"Enter number1: ";
        cin>>a;
        cout<<"Enter number2: ";
        cin>>b;
        cout<<"Sum of "<<a<<" and "<<b<<" is "<<sum(a,b);
        g();
        return 0;
}
    int sum(int a,int b)
    {
        return a+b;
    }

    void g(){
        cout<<"\nHello! Good Morning!"<<endl;
    }