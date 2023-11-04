#include<iostream>
using namespace std;

class number{
    int a;
    public:
    number (){
        a=0;
    }
    number (int x){
        a=x;
    }
    //when no copy constrotor are found then compiler will create a default copy constructor
    number(number &obj){
        cout<<"copy constructor is called"<<endl;
        a=obj.a;
    }
    void display(){
        cout<<"The number is: "<<a<<endl;
    }
};

    int main(){
        
        number n1,n2,n3(45);
        n1.display();
        n2.display();
        //1. copy constructor is called
        number z(n3);
        z.display();

        //2. copy constructor is called
        number z1=n3;
        z1.display();
    
    return 0;
}