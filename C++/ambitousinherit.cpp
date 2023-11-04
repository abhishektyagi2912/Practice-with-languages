#include <iostream>
using namespace std;

class number
{
public:
    void setnumber()
    {
        cout << "How are you" << endl;
    }
};
class num
{
public:
    void setnumber()
    {
        cout << "How are you 69" << endl;
    }
};
class num1:public number,public num{
    public:
    void setnumber(){
        num::setnumber();
    } 
};

int main()
{
    number n1;
    num n2;
    n1.setnumber();
    n2.setnumber();

    num1 abhi;
    abhi.setnumber();


    return 0;
}