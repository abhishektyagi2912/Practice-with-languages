#include<iostream>
using namespace std;

class num{
    int data1;
    public:
    int data2;
    void setdata();
    int getdata1();
    int getdata2();
};
void num::setdata(){
    data1=10;
    data2=20;
}
int num:: getdata1(){
    return data1;
}
int num:: getdata2(){
    return data2;
}
class student:public num{
    int data3;
    public:
    void process();
    void display();

};
void student::process(){
    data3=getdata1()*data2;  //getdata1 is base class function so by this we acess data1 which is private function
}
void student:: display(){
    cout<<"data1: "<<getdata1()<<endl;
    cout<<"data2: "<<data2<<endl;
    cout<<"data3: "<<data3<<endl;
}

    int main(){
        student s;
        s.setdata();
        s.process();
        s.display();
    
    return 0;
}