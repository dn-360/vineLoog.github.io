#include <iostream>
#include <algorithm>
#include <random>
#include <unordered_map>
#include <main.h>
#define MAX_NAME_LENGTH = 128;

using namespace std;
    
class Resource{
    int percent, price, quantity, category;
    char * name;
    public:
    void Struct(char * name, int price, int quantity, int category){
    
    
    }

    char * setName(){
        name = "sample";
    }
    void setPrice(int a, int b, int c){
        price = a;
        quantity = b;
        category = c;
    }

    double foodMaterial(){
    if (category == 1){
        return 1.5;
    }
    return 1;
}
    
};

int percentCalc(Resource * entry){
    return 0;    
}


int main(int argc,char **argv) {
    Resource * entry;
    
	//resource array

    //Insert function to store input variables
    percentCalc(entry);
    //Insert function to calculate percent on a monthly basis? (store values into array)



}

