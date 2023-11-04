#include <iostream>
using namespace std;
class Animal{
    public:
    void speak(){
        cout<<"Speaking"<<endl;
    }
};
class Dog:public Animal{
    public:
    // this is overiding 
    void speak(){
        cout<<"Bark"<<endl;
    }
};

int main()
{
    Dog d;
    d.speak();


    return 0;
}   