#include <iostream>
using namespace std;

class student
{

private:
    int a, b, c;

public:
    int d, e;
    void setdata(int a1, int b1, int c1); //DECLARATION
    void getdata()
    {
        cout << "a is: " << a << endl;
        cout << "b is: " << b << endl;
        cout << "c is: " << c << endl;
        cout << "d is: " << d << endl;
        cout << "e is: " << e << endl;
    }
};

void student ::setdata(int a1, int b1, int c1)
{
    a = a1;
    b = b1;
    c = c1;
}

int main()
{
    student s1;
    s1.setdata(10, 20, 30);
    // s1.a=10; this is private member so we cannot access it
    s1.d = 255;
    s1.e = 250;
    s1.getdata();

    student s2;
    s2.setdata(100, 200, 300);
    s2.d = 255;
    s2.e = 250;
    s2.getdata();

    return 0;
}