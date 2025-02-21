package misfinanzas.backend.jwt;

import java.io.IOException;

import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

// La clase abstracta OncePerRequestsFilter se utiliza para crear filtros personalizados
// la razon del por que se va a extender de esta clase, es para garantizar que el filtro se ejecute solo una vez por cada solicitud HTTP

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter  {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        // TODO Auto-generated method stub

        final String token = getTokenFromRequest(request);
        
                if(token == null){
                    filterChain.doFilter(request, response);
                }
        
                filterChain.doFilter(request, response);
         
            }
        
            private String getTokenFromRequest(HttpServletRequest request) {
                // TODO Auto-generated method stub
                final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

                // Este encabezado o string al que vamos a acceder va a comenzar con la palabra "Bearer", 
                // ya que estamos trabajando con autenticacion basada en token.

                // Entonces lo primero que se debe hacer es verificar esto, para retornar el token, porque se debe extraer el token
                // de esa cadena de caracteres sin incorporar la palabra "Bearer".

                if(StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer ")){

                    //Luego de la palabra "Bearer" viene el token, por lo que se extrae.
                    // Osea se extrae el String desde el caracter 7 hasta el final.
                    return authHeader.substring(7);
                }
                return null;  
            }


    
}
