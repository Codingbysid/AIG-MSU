export default function TestLogo() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Logo Test Page</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Test 1: logo-simple.jpg</h2>
          <img 
            src="/logo-simple.jpg" 
            alt="Logo Simple" 
            width={100} 
            height={100}
            className="border"
            onError={(e) => {
              console.log('logo-simple.jpg failed to load');
              e.currentTarget.style.border = '2px solid red';
            }}
            onLoad={() => {
              console.log('logo-simple.jpg loaded successfully');
              e.currentTarget.style.border = '2px solid green';
            }}
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Test 2: logo.jpg</h2>
          <img 
            src="/logo.jpg" 
            alt="Logo" 
            width={100} 
            height={100}
            className="border"
            onError={(e) => {
              console.log('logo.jpg failed to load');
              e.currentTarget.style.border = '2px solid red';
            }}
            onLoad={() => {
              console.log('logo.jpg loaded successfully');
              e.currentTarget.style.border = '2px solid green';
            }}
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Test 3: Fallback SVG</h2>
          <img 
            src="/logo-fallback.svg" 
            alt="Logo Fallback" 
            width={100} 
            height={100}
            className="border"
          />
        </div>
      </div>
    </div>
  );
}
