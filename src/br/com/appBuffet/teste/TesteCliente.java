package br.com.appBuffet.teste;


import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import br.com.appBuffet.modelo.Cliente;

public class TesteCliente {

	public static void main(String[] args) {
		
		Cliente cliente = new Cliente();
		cliente.setNome("Christian");
		cliente.setCpf("39840562819");
		cliente.setCep("12280-017");
		cliente.setRua("Rua 1");
		cliente.setNumero("60");
		cliente.setBairro("bairro1");
		cliente.setCidade("cidade 1");
		cliente.setTelefone("12214514");
		cliente.setEmail("oliveira@hotmail.com");
		
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("appBuffetJPA");
		EntityManager em = emf.createEntityManager();
		
		em.getTransaction().begin();
		em.persist(cliente);
		em.getTransaction().commit();
		
		em.close();
		emf.close();
	}

}
