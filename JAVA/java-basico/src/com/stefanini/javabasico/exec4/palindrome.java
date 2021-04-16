package com.stefanini.javabasico.exec4;

import java.util.Scanner;

public class palindrome {

	public static void main(String[] args) {
		Scanner leia = new Scanner (System.in);
		
		//variaveis
		System.out.print("Digite uma palavra: ");
		String palavra = leia.next();
		
		String invertida = new StringBuilder(palavra).reverse().toString();
		
		//processamento
		if(palavra.equals(invertida)){
		System.out.println("\n… PALINDROME MEU AMIGO!");
		}else {
		System.out.println("\nTURURU N„o È um palindrome");
		}

		}	
		
	}

