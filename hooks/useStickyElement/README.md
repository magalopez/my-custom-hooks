# useStickyElement Hook

Ejemplo:
```
    const stickyElement = {
        stickyBool: true || false,
        topElement: ".class" || "#id",
        bottomElement: ".class" || "#id",
        subtractionBottom: number
    };
    
    const [ sticky ] = useStickyElement( stickyElement );
```