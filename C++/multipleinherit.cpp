#include<iostream>
using namespace std;

class A{
    protected:
        int base1;
    public:
        void setnumber1(int x){
            base1=x;
        }
};
class B{
    protected:
        int base2;
    public:
        void setnumber2(int x){
            base2=x;
        }
};
class C:public A,public B{
    public:
    void show(){
        cout<<"base1="<<base1<<endl; //it is because of protected but protected canot written in main function
        cout<<"base2="<<base2<<endl;
        cout<<"base1+base2="<<base1+base2<<endl;
    }
};


    int main(){
        C harry;
        harry.setnumber1(10);
        harry.setnumber2(20);
        harry.show();

    
    return 0;
}