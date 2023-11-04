#include <iostream>
using namespace std;

class A{
    public:
    void sayfunc(){
        cout<<"Hello"<<endl;
    }
    void sayfunc(int a){
        cout<<a;
    }

};

int main()
{
    A obj;
    obj.sayfunc();
    obj.sayfunc(5);


    return 0;
}