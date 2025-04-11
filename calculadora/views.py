from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class CalculatorView(APIView):
    def post(self, request):
        data = request.data
        print(request.data)
        try:
            num1 = float(data.get('num1'))
            num2 = float(data.get('num2'))
            operator = data.get('operator')

            if num1 == "" or num2 == "":
                return Response({'error': 'Debe ingresar ambos números'}, status=status.HTTP_400_BAD_REQUEST)

            if operator == '+':
                result = num1 + num2
            elif operator == '-':
                result = num1 - num2
            elif operator == '*':
                result = num1 * num2
            elif operator == '/':
                result = num1 / num2 if num2 != 0 else 'No se puede dividir por 0'
            elif operator == '**':
                result = num1 ** num2
            elif operator == '%':
                result = num1 % num2 if num2 != 0 else 'No se puede dividir por 0'

            else:
                return Response({'error': 'Operador inválido'}, status=status.HTTP_400_BAD_REQUEST)

            return Response({'result': result})

        except ValueError:
            return Response({'error': 'Debe ingresar números válidos'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'error': 'Ocurrió un error inesperado'}, status=status.HTTP_400_BAD_REQUEST)



    