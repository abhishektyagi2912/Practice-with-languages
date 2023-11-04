#include<iostream>
using namespace std;

class simple{
    int a,b,c;
    public:
    simple(int x,int y=9,int z=10){
        a=x;
        b=y;
        c=z;
    }
    void printnumber(){
        cout<<"The number is: "<<a<<","<<b<<","<<c<<endl;
    }
};

    int main(){
    simple p(10,20,30);
    p.printnumber();
    simple q(40);
    q.printnumber();
    simple r(10,20,30);
    r.printnumber();
    return 0;
}