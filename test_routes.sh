#!/bin/bash

echo "Testing all routes..."
echo ""

# Test home page
echo "Testing home page..."
curl -s -o /dev/null -w "Status: %{http_code}\n" http://localhost:3000/

echo ""
echo "Testing projects page..."
curl -s -o /dev/null -w "Status: %{http_code}\n" http://localhost:3000/projects/

echo ""
echo "Testing resume page..."
curl -s -o /dev/null -w "Status: %{http_code}\n" http://localhost:3000/resume/

echo ""
echo "Testing contact page..."
curl -s -o /dev/null -w "Status: %{http_code}\n" http://localhost:3000/contactus/

echo ""
echo "Testing backend API..."
curl -s -o /dev/null -w "Status: %{http_code}\n" http://127.0.0.1:8888/api/contact/

echo ""
echo "All tests completed!"
