# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductID, ProductName, CategoryName FROM Products
JOIN Categories
ON Products.CategoryId = Categories.CategoryId

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderID, OrderDate, ShipperName FROM [Orders] 
JOIN Shippers
ON Orders.ShipperID = Shippers.ShipperID
WHERE Orders.OrderDate < '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT OrderID, ProductName, Quantity FROM OrderDetails AS O 
JOIN Products AS P
ON O.ProductID = P.ProductID
WHERE O.OrderID = '10251'
ORDER BY ProductName;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT OrderID, CustomerName, LastName FROM Orders AS O
JOIN Customers AS C
ON O.CustomerID = C.CustomerID
JOIN Employees AS E
ON O.EmployeeID = E.EmployeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT CategoryName, COUNT(*) AS Total FROM Products as P
JOIN Categories as C
ON P.CategoryID = C.CategoryID
GROUP BY P.CategoryID;

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

Select OrderID, ProductID * Quantity AS ItemCount FROM OrderDetails
GROUP BY OrderID;

