//it contain two class and we use data from one class to another as a friend function 

#include<iostream>
using namespace std;

//forward declation
class complex;

class calculator{
    int add(int a, int b){
        return a+b;
    }
    public:

    int sumrealcomplex(complex, complex);
    int sumcompcomplex(complex,complex);

};

class complex{
    int a,b;
    //individually declaring friend class
    friend int calculator::sumrealcomplex(complex, complex);
    friend int calculator::sumcompcomplex(complex, complex);

    //alter we can declare a function as class 
    friend class calculator;


    public:
    void setnumber(int a1, int b1){
        a=a1;
        b=b1;
        this->a=a1;
    }
    void getnumber(){
        cout<<"No. is"<<a<<" + "<<b<<"i"<<endl;
    }
};

int calculator::sumrealcomplex(complex c1, complex c2){
    return(c1.a+c2.a);
};
int calculator::sumcompcomplex(complex c1, complex c2){
    return(c1.b+c2.b);
};

    int main(){
        int a,b,c,d;
        complex c1,c2;
        cout<<"enter the no. "<<endl;
        cin>>a;
        cout<<"enter the no. "<<endl;
        cin>>b;
        c1.setnumber(a,b);
        c2.setnumber(30,40);
        calculator cal;
        int res=cal.sumrealcomplex(c1,c2);
        cout<<"Sum of real part is:"<<res<<endl;
        int re=cal.sumcompcomplex(c1,c2);
        cout<<"Sum of complex part is:"<<re<<endl;

    
    return 0;
}