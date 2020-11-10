---
title: "Linked List Basic Programs"
date: "2020-10-11"
draft: false
path: "/blog/list"
---
```
#include<bits/stdc++.h>
using namespace std;
//create a structure for Node which will
// contain data and pointer to next Node
struct Node{
	int data;
	struct Node *next;
	//Function to create new node
	//with Next Pointing to NULL
	Node(int x){
		data = x;
		next = NULL; 
	}
};

//Function to display List
void display(Node* head){
	//Pass the Head to traverse 
	//list from start to end
	Node* temp = head;
	//Iterate until we reach NULL/End of List
	while(temp != NULL){
		cout<<temp->data<<" ";
		temp = temp->next;
	}
}

//Function to insert Element in List
void InsertNode(Node* head, int data, int key)
{
	//create a pointer which will point to head
	Node* temp = head;
	//Node to prev element used at the time of inserting
	Node* prev = NULL;
	//Node which is inserted in between
	Node* insert = new Node(data);
	key++; //increamented key because we need to insert next to key 
	while(key--){
		prev = temp;
		temp = temp->next;
	}
	//	previous node's next will point to node insert we have created
	prev->next = insert;
	// now insert's next will point to temp
	insert->next = temp;
	
}

//Function to Count Number of Elements in List
int countNode(Node* head){
	Node* temp = head;
	int len = 0; //Flag varaible to store length
	while(temp != NULL){
		len++; //incrented flag to calculate
		temp = temp->next;
	}
	return len; 
}

//Function to calculate Sum of Node in List
int sumNode(Node* head){
	Node* temp = head;
	int sum = 0; //Flag varaible to store sum of List
	while(temp != NULL){
		sum += temp->data; //Adding previous result with curretn values
		temp = temp->next; //moving temp node forward
	}
	return sum; 
}

//Function to Find Maximum Node in the list
int maxNode(Node* head){
	int max_ele = head->data; //to store max value
	Node* temp = head;
	while(temp != NULL){
		if(temp->data >= max_ele){
		//comparing and replacing max 
		 //value with current if it is smaller
		max_ele = temp->data; //moving temp node forward
		}
		temp = temp->next;
	}
}

//Function to search Node in list
bool searchNode(Node* head,int val){
	Node* temp = head;
	while(temp != NULL){
		if(temp->data == val){
			//if we found element searching then return true
			return true;
		}
		temp = temp->next;
	}
	//if we can find  value return false
	return false;
}

void reverse(Node* head){
	Node* curr = head;
	Node* prev = NULL;
	Node* next = NULL;
	while(curr != NULL){
		 next = curr->next;
		 curr->next = prev;
		 prev = curr;
		 curr = next;
	}
	 head = prev;
}

//Function to find the middle element of list
void middleNode(Node* head){
	Node* slow = head; //this pointer will move one by one
	Node* fast = head; //this pointer will move two steps
	while(fast != NULL && fast->next != NULL){
		slow = slow->next;
		fast = fast->next->next;
	}
	//so when fast is at end then slow
	// will be at middle of the list
	cout<<slow->data<<endl;
}
int main(){
	//input data variable to create list 
	int n,data,index,val;
	cout<<"Enter the Number of Nodes -:  ";
	cin>>n; //input no. of nodes
	cout<<"Enter data -: ";
	cin>>data; //input data
	//create two pointer head and tail 
	//create head node and fill data in it
	Node* head = new Node(data);
	//assign tail as head
	Node* tail = head;	
	//move tail pointer to forward
	for(int i=0;i<n-1;i++){
		cin>>data;
		//create a new node by passing input data
		tail->next = new Node(data);
		tail = tail->next;
	}
	int  operation;
	 
	 while(1){
	 	//Menu List for operations
	 	cout<<"List Menu"<<endl;
	 	cout<<"1. Display List"<<endl;
		cout<<"2. Count Nodes"<<endl;
		cout<<"3. Sum of Nodes"<<endl;	
		cout<<"4. Search Node"<<endl;
		cout<<"5. Max of Nodes"<<endl;
		cout<<"6. Insert Node"<<endl;
		cout<<"7.Reverse List"<<endl;
		cout<<"8.Middle of List"<<endl;
		cout<<"9. Exit"<<endl;	
	 	cout<<"Enter Your Choice"<<endl;
		 cin>>operation;
		 //Switch case to perform those list operation
	 	switch(operation){
	 		case 1: display(head);
	 				cout<<endl;
	 				break;
	 		case 2: cout<<"Total No. of Nodes -:"<<countNode(head)<<endl;
	 				  break;
	 		case 3: cout<<"Sum of All Nodes -:"<<sumNode(head)<<endl;
	 				  break;
	 		case 4:  cout<<"Enter the value to search -:";
	 				  cin>>val;
			 		  cout<<"Element is -:"<<searchNode(head,val)<<endl;
	 				  break;
	 		case 5: cout<<"Maximum Node"<<maxNode(head)<<endl;
	 				  break;
	 		case 6: cout<<"Enter data to insert -: ";
	 				 cin>>data;
	 				 cout<<"Enter Index -: ";
	 				 cin>>index;
	 				 InsertNode(head,data,index);
	 				 cout<<endl;
	 				 display(head);
	 				 cout<<endl;
	 				 break;
	 		case 7 :reverse(head);
	 				display(head);
	 				break;
	 		case 8: middleNode(head);
	 				break;
			case 9 : exit(0);
	 			
		 }
	 	
	 }
	return 0;
}
```
