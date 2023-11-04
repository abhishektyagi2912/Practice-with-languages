#include<iostream>
using namespace std;

class complex{
    int a,b;
    public:
    complex(int,int);
    void printnumber(){
        cout<<"The number is: "<<a<<"+"<<b<<"i"<<endl;
    }
};
complex::complex(int x,int y){
    a=x;
    b=y;
}

    int main(){
        //implicitly call
        complex a(10,20);
        a.printnumber();

        //explicitly call
        complex b=complex (30,40);
        b.printnumber();
    
    return 0;
}