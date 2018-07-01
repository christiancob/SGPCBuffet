package br.com.appBuffet.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import br.com.appBuffet.jdbc.ConnectionFactory;
import br.com.appBuffet.modelo.Usuario;

public class UsuarioDAO {
	
	// a conexão com o banco de dados
    private Connection connection;

    public UsuarioDAO() {
        this.connection = new ConnectionFactory().getConnection();
    }
    
    public List<Usuario> getLista() {
        try {
            List<Usuario> usuarios = new ArrayList<Usuario>();
            PreparedStatement stmt = this.connection.
                    prepareStatement("select * from usuario");
            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                // criando o objeto Contato
            	Usuario usuario = new Usuario();
            	usuario.setId(rs.getLong("id"));
            	usuario.setEmail(rs.getString("email"));
            	usuario.setSenha(rs.getString("senha"));
            	usuario.setNome(rs.getString("nome"));
            	usuario.setRg(rs.getString("rg"));
            	usuario.setTelefone(rs.getString("telefone"));
            	usuario.setCel(rs.getString("celular"));

                usuarios.add(usuario);
            }
            rs.close();
            stmt.close();
            return usuarios;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
    
    public void adiciona(Usuario usuario) {
        String sql = "insert into usuario " +
                "(email,senha,nome,cpf,rg,telefone,celular)" +
                " values (?,?,?,?,?,?,?)";
        try {
            // prepared statement para inserção
            PreparedStatement stmt = connection.prepareStatement(sql);

            // seta os valores
            stmt.setString(1,usuario.getEmail());
            stmt.setString(2,usuario.getSenha());
            stmt.setString(3,usuario.getNome());
            stmt.setString(4,usuario.getCpf());
            stmt.setString(5,usuario.getRg());            
            stmt.setString(6,usuario.getTelefone());
            stmt.setString(7,usuario.getCel());

            // executa
            stmt.execute();
            stmt.close();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        	}
    	}
    
    public void altera(Usuario usuario) {
        String sql = "update usuario set nome=?, email=?, senha=?," +
                "telefone=? where id=?";
        try {
            PreparedStatement stmt = connection.prepareStatement(sql);
            stmt.setString(1, usuario.getNome());
            stmt.setString(2, usuario.getEmail());
            stmt.setString(3, usuario.getSenha());
            stmt.setString(4, usuario.getSenha());
            stmt.setString(5, usuario.getCpf());
            stmt.execute();
            stmt.close();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
    
    public void remove(Usuario usuario) {
        try {
            PreparedStatement stmt = connection
                    .prepareStatement("delete from usuario where id=?");
            stmt.setLong(1, usuario.getId());
            stmt.execute();
            stmt.close();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
    	
}

//private final static Map<String, Usuario> USUARIOS = new HashMap<>();
//	
//	static {
//		USUARIOS.put("christian_cob@hotmail.com", new Usuario("christian", "christian_cob@hotmail.com", "123"));
//		USUARIOS.put("teste@hotmail.com",new Usuario("joao", "teste@hotmail.com", "teste"));
//	}
//	
//	public Usuario buscaPorEmailESenha(String email, String senha) {
//		if (!USUARIOS.containsKey(email))
//			
//			return null;
//
//		Usuario usuario = USUARIOS.get(email);
//		if (usuario.getSenha().equals(senha))
//			return usuario;
//		
//		return null;
//	}

