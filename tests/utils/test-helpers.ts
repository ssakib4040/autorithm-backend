/**
 * Test Utilities
 * Helper functions and mock data for API testing
 */

// Mock User Data
export const mockUser = {
  id: "user-123",
  email: "test@example.com",
  name: "Test User",
  role: "user",
  createdAt: new Date().toISOString(),
};

export const mockAdminUser = {
  id: "admin-123",
  email: "admin@example.com",
  name: "Admin User",
  role: "admin",
  createdAt: new Date().toISOString(),
};

// Mock Product Data
export const mockProduct = {
  id: "product-123",
  name: "n8n CRM Automation Workflow",
  description: "Complete CRM automation workflow for n8n",
  price: 49.99,
  category: "CRM",
  platform: "n8n",
  featured: true,
  rating: 4.8,
  downloads: 1250,
  createdAt: new Date().toISOString(),
};

// Mock Order Data
export const mockOrder = {
  id: "order-123",
  userId: "user-123",
  productId: "product-123",
  total: 49.99,
  status: "pending",
  createdAt: new Date().toISOString(),
};

// Mock JWT Token
export const mockToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLTEyMyIsImVtYWlsIjoidGVzdEBleGFtcGxlLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// Helper function to create authenticated request headers
export const createAuthHeaders = (token: string = mockToken) => {
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

// Helper function to create mock NextRequest
export const createMockRequest = (
  url: string,
  options?: {
    method?: string;
    body?: any;
    headers?: Record<string, string>;
  }
) => {
  const { method = "GET", body, headers = {} } = options || {};

  const requestInit: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body) {
    requestInit.body = JSON.stringify(body);
  }

  return new Request(url, requestInit);
};

// Helper to validate JWT structure
export const isValidJWT = (token: string): boolean => {
  const parts = token.split(".");
  return parts.length === 3;
};

// Helper to validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Helper to validate UUID format
export const isValidUUID = (id: string): boolean => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(id);
};

// Mock Database (for testing purposes)
export class MockDatabase {
  private users: any[] = [mockUser, mockAdminUser];
  private products: any[] = [mockProduct];
  private orders: any[] = [mockOrder];

  // User methods
  findUserByEmail(email: string) {
    return this.users.find((u) => u.email === email);
  }

  findUserById(id: string) {
    return this.users.find((u) => u.id === id);
  }

  createUser(user: any) {
    this.users.push(user);
    return user;
  }

  // Product methods
  findProductById(id: string) {
    return this.products.find((p) => p.id === id);
  }

  getAllProducts() {
    return this.products;
  }

  createProduct(product: any) {
    this.products.push(product);
    return product;
  }

  // Order methods
  findOrderById(id: string) {
    return this.orders.find((o) => o.id === id);
  }

  findOrdersByUserId(userId: string) {
    return this.orders.filter((o) => o.userId === userId);
  }

  createOrder(order: any) {
    this.orders.push(order);
    return order;
  }

  reset() {
    this.users = [mockUser, mockAdminUser];
    this.products = [mockProduct];
    this.orders = [mockOrder];
  }
}

export const mockDb = new MockDatabase();
