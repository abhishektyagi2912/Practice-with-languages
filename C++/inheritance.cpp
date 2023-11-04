#include <iostream>
using namespace std;

// base class
class employee
{
public:
    int id;
    float salary;
    employee(){}
    employee(int intid)
    {
        id = intid;
        salary = 45.00;
    }
};
// create derived class from base class

//default visibilty is private 
//public then all public member base class members are public
//private then public member of base class members are private
//private member are not inherited
class programer : public employee
{
    public: 
    int languagecode;
    programer(int intids)
    {
        // salary=sorvia;   //just for checking purpose
        id = intids;
        languagecode = 9;
    }
    void getdata(){
        cout<<"id: "<<id<<endl;
    }
};
int main()
{
    employee e1(1),e2(2);
    cout<<e1.salary<<endl;
    cout<<e2.salary<<endl;
    programer p(10);
    cout<<p.languagecode<<endl;
    cout<<p.id<<endl;
    p.getdata();

    return 0;
}