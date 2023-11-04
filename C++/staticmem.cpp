#include<iostream>
using namespace std;
class Employee{
    int id;
    static int counter;

    public:
    void setdata(void){
        cout<<"Enter the number of employees "<<counter<<endl;
        cin>>id;
        counter++;
    }
    void getdata(void){
        cout<<"The number of employees is "<<id<<endl;
    }
    static void getcount(void){
        cout<<"the no. of employee "<<counter<<endl;
    }

};

int Employee::counter=1;

    int main(){
        Employee e1 ,e2 ,e3;

        e1.setdata();
        e1.getdata();
        Employee::getcount();

        e2.setdata();
        e2.getdata();
        Employee::getcount();

        e3.setdata();
        e3.getdata();
        Employee::getcount();
    
    return 0;
}