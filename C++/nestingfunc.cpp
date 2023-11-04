// tut 22
//nesting mean that we can have a structure inside another structure


#include <iostream>
#include <string>
using namespace std;

class binary
{
    string s;

public:
    void read(void);
    void check(void);
    void ones_complement(void);
    void display(void);
};

void binary ::read(void)
{
    cout << "Enter binary number: ";
    cin >> s;
}

void binary ::check(void)
{
    for (int i = 0; i < s.length(); i++)
    {
        if (s.at(i) != '0' && s.at(i) != '1')
        {
            cout << "Invalid binary number" << endl;
            exit(0);
        }
    }
}

void binary ::ones_complement(void)
{
    check(); //nesting
    for (int i = 0; i < s.length(); i++)
    {
        if (s.at(i) == '0')
        {
            s.at(i) = '1';
        }
        else
        {
            s.at(i) = '0';
        }
    }
}

void binary ::display(void)
{
    cout << "Your Binary No." << s << endl;
    for (int i = 0; i < s.length(); i++)
    {
        cout << s.at(i);
    }
    cout << endl;
}

int main()
{
    binary b;
    b.read();
    // b.check();   //this is hide beacue we already have check function in ones compiment that check automaticaly.
    b.ones_complement();
    b.display();

    return 0;
}