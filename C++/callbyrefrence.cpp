#include<iostream>
using namespace std;
//this will not work
    // void swap(int a,int b){
    //     int temp;
    //     temp=a;
    //     a=b;
    //     b=temp;
    // }
//call by refrence using pointers
    void swappointer(int *a,int *b){
        int temp;
        temp=*a;
        *a=*b;
        *b=temp;
    }
//call by value using c++ variables
    void swaprefrencevar(int &a,int &b){
        int temp;
        temp=a;
        a=b;
        b=temp;
    }
    int main(){
        int a,b;
        cout<<"Enter number1: ";
        cin>>a;
        cout<<"Enter number2: ";
        cin>>b;
        //swap(a,b);//this will not work
        // swappointer(&a,&b); //this will work using pointers
        swaprefrencevar(a,b); //this will work using c++ variables
        cout<<"After swapping a is: "<<a<<endl;
        cout<<"After swapping b is: "<<b<<endl;
        return 0;
    } 
