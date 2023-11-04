#include <iostream>
using namespace std;

class complex
{
    int a, b;

public:
    complex(void);
    void printnumber()
    {
        cout << "The number is: " << a << "+" << b << "i" << endl;
    }
};

complex::complex(void)
{
    cout << "Enter real and imaginary part: " << endl;
    cin >> a >> b;
};
int main()
{
    complex c1;
    c1.printnumber();

    return 0;
}

//it declare in public section
//it can also have a default argument 
//it can not return the vale
//