import { Button } from "@/components/ui/button";

export const ContactInfoSkeleton = () => {
  return (
    <div className="p-4 animate-pulse">
      {/* Avatar y encabezado */}
      <div className="flex flex-col items-center pb-6 border-b">
        <div className="h-20 w-20 rounded-full bg-gray-300 mb-3" />
        <div className="h-5 w-32 bg-gray-300 rounded mb-2" />
        <div className="h-4 w-24 bg-gray-300 rounded mb-2" />
        <div className="flex items-center mt-1 space-x-2">
          <div className="h-2 w-2 rounded-full bg-gray-300" />
          <div className="h-3 w-16 bg-gray-300 rounded" />
        </div>
      </div>

      {/* Información de contacto */}
      <div className="py-4 space-y-6">
        <div>
          <div className="h-4 w-40 bg-gray-300 rounded mb-3" />
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <div className="h-4 w-20 bg-gray-300 rounded" />
              <div className="h-4 w-28 bg-gray-300 rounded" />
            </div>
            <div className="flex justify-between text-sm">
              <div className="h-4 w-20 bg-gray-300 rounded" />
              <div className="h-4 w-24 bg-gray-300 rounded" />
            </div>
            <div className="flex justify-between text-sm">
              <div className="h-4 w-28 bg-gray-300 rounded" />
              <div className="h-4 w-20 bg-gray-300 rounded" />
            </div>
          </div>
        </div>

        {/* Detalles de cuenta */}
        <div>
          <div className="h-4 w-40 bg-gray-300 rounded mb-3" />
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <div className="h-4 w-16 bg-gray-300 rounded" />
              <div className="h-4 w-20 bg-gray-300 rounded" />
            </div>
            <div className="flex justify-between text-sm">
              <div className="h-4 w-28 bg-gray-300 rounded" />
              <div className="h-4 w-24 bg-gray-300 rounded" />
            </div>
            <div className="flex justify-between text-sm">
              <div className="h-4 w-24 bg-gray-300 rounded" />
              <div className="h-4 w-16 bg-gray-300 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Botón */}
      <div className="pt-4 border-t">
        <Button
          variant="outline"
          size="sm"
          disabled
          className="w-full bg-gray-300 text-transparent"
        >
          Loading...
        </Button>
      </div>
    </div>
  );
};
