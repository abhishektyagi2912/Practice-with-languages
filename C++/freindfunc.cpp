#include<iostream>
using namespace std;

class complex{
    int a;
    int b;

    public:
    void setnumber(int a1,int b1){
        a=a1;
        b=b1;
    }

    friend complex sumcomplex(complex o1,complex o2);
    void getnumber(){
        cout<< a<<" + "<<b<<"i"<<endl;
    }
};

complex sumcomplex(complex o1, complex o2){
    complex o3;
    o3.setnumber((o1.a+o2.a), (o1.b+o2.b));
    return o3;
}

    int main(){
        complex c1,c2,sum;
        c1.setnumber(10,20);
        c1.getnumber();

        c2.setnumber(10,20);
        c2.getnumber();

        sum=sumcomplex(c1,c2);
        sum.getnumber();
    
    return 0;
}



/* properties of friend function

1. friend function can access private members of class
2. you can not call c1.sumcomplex == invalid because it is not in the scope of class
3, it can be declared in private and public section of class


*/