#include<iostream>
using namespace std;

class complex{
    int a,b;
    public:
    complex(){
        a=0;
        b=0;
    }
    complex(int x, int y){
        a=x;
        b=y;
    }
    complex(int x){
        a=x;
        b=0;
    }
    
    void printnumber(){
        cout<<"The number is: "<<a<<"+"<<b<<"i"<<endl;
    }
};

    int main(){
        int x,y;
        cout<<"Enter the real and imaginary part: "<<endl;
        cin>>x>>y;

        complex c1(x,y);
        c1.printnumber();

        complex c2(x);
        c2.printnumber(); 

        complex c3;
        c3.printnumber();

        complex c4(y);
        c4.printnumber();
    return 0;
}