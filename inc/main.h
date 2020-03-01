CFLAGS = -Iinc -Idep -w -std=c++11 -lboost_system -lboost_filesystem -lpthread
#ifndef MYLIB
#define MYLIB
#include <string>
int percentCalc(Resource * entry);
#endif