#include <bits/stdc++.h>
using namespace std;
int main(){
int t;
cin>>t;
while (t--)
{
    int n,m,l;
    cin>>n>>m>>l;
    int buk = l+n-1;
    while(m>=l){
            m = m-((m/buk)*buk);
            buk--;
    }
        cout<<m<<endl;
}

return 0;
}


// #include <bits/stdc++.h>
// using namespace std;
// int main(){
// int t;
// cin>>t;
// while(t--){
//     int x,y;
//     cin>>x>>y;
//     string s1,s2;
//     if((x%2 ==0 && y%2!=0 ) && y>1){
//         string strc, strd;
//         strc.append(x/2,'a');
//         strd.append(y,'b');
//         s1 = strc+strd+strc;
//         cout<<s1<<endl;

//         string stra, strb;
//         stra.append(x/2,'a');
//         strb.append(y/2,'b');
//         s1 = strb+stra+'b'+stra+strb;
//         cout<<s1<<endl;
//     }else if(x%2==0 && y%2==0){
//         string stra, strb;
//         stra.append(x/2,'a');
//         strb.append(y,'b');
//         s1 = stra+strb+stra;
//         cout<<s1<<endl;


//         string strc, strd;
//         strc.append(x,'a');
//         strd.append(y/2,'b');
//         s1 = strd+strc+strd;
//         cout<<s1<<endl;

        
//     }else if((x%2!=0 && y%2==0) && x>1){
//         string strc, strd;
//         strc.append(x,'a');
//         strd.append(y/2,'b');
//         s1 = strd+strc+strd;
//         cout<<s1<<endl;

//         string stra, strb;
//         stra.append(x/2,'a');
//         strb.append(y/2,'b');
//         s1 = stra+strb+'a'+strb+stra;
//         cout<<s1<<endl;

//     }else{
//         cout<<-1<<endl;
//     }
// }
// return 0;
// }


// #include <iostream>
// using namespace std;

// int main() {
// 	// your code goes here
// 	int t;
// 	cin>>t;
// 	while(t--){
// 	    long long int n;
// 	    cin>>n;
// 	    long long int a[n];
//         long long int count1=0,count2=0;
//         for (int i = 0; i < n; i++)
//         {
//             cin>>a[i];
//             if(a[i]==1){
//                 count1++;
//             }
//             if(a[i]==2){
//                 count2++;
//             }
//         }
//         long long int one = (count1*(n-1))-(count1-1);
//         long long int two = ((count2-1)*count2)/2;
//         cout<<one+two<<endl;
        
// 	}
// 	return 0;
// }
