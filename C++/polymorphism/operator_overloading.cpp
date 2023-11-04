#include <iostream>
using namespace std;

class A{
    public:
    int a;

    void operator+(A &obj){
        int val = this->a;
        int val1 = obj.a;
        cout<<"Object "<<val1 - val <<endl ;

    }

    void operator()(){
        cout<<"I am bracket "<<this->a<<endl;
    }
};

int main()
{
    A obj,obj2;
    obj.a = 10;
    obj2.a = 7;

    obj + obj2;
    obj();

    return 0;
}